import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Room from './room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';
import {offerNotFound} from '../../store/offer/actions';
import {getOffer, getOffersNearby, getComments, getStatusLoadOffer, getStatusLoadOffersNearby, getStatusLoadComments, getStatusNotFoundOffer} from '../../store/offer/selectors';

import {fetchOffer, fetchComments, fetchOffersNearby} from '../../store/offer/operations';
import LoadingScreen from '../loading-screen/loading-screen';
import {offerPropTypes, reviewPropTypes} from '../../prop-types';

const RoomContainer = (props) => {
  const {offer, offersNearby, comments, isOfferLoaded, isOffersNearbyLoaded, isCommentsLoaded, onLoadData, isOfferNotFound, refreshStatus} = props;
  const {id} = useParams();

  useEffect(() => {
    refreshStatus();
    onLoadData(id);
  }, [id]);

  if (isOfferNotFound) {
    return <NotFoundScreen />;
  }

  if (!isOfferLoaded || !isOffersNearbyLoaded || !isCommentsLoaded) {
    return <LoadingScreen />;
  }

  if (offer) {
    return (
      <Room cardData={offer} reviewsData={comments} otherOffers={offersNearby} />
    );
  }

  return <NotFoundScreen />;
};

RoomContainer.propTypes = {
  offer: PropTypes.object.isRequired,
  offersNearby: PropTypes.arrayOf(offerPropTypes),
  comments: PropTypes.arrayOf(reviewPropTypes),
  isOfferLoaded: PropTypes.bool.isRequired,
  isOffersNearbyLoaded: PropTypes.bool.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func,
  isOfferNotFound: PropTypes.bool,
  refreshStatus: PropTypes.func
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  offersNearby: getOffersNearby(state),
  comments: getComments(state),
  isOfferLoaded: getStatusLoadOffer(state),
  isOffersNearbyLoaded: getStatusLoadOffersNearby(state),
  isCommentsLoaded: getStatusLoadComments(state),
  isOfferNotFound: getStatusNotFoundOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  refreshStatus() {
    dispatch(offerNotFound(false));
  },
  onLoadData(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchOffersNearby(id));
  }
});

export {RoomContainer};
export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
