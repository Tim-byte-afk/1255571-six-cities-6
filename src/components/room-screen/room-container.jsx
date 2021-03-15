import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Room from './room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';

import {fetchOffer, fetchComments, fetchOffersNearby} from '../../store/api-actions.js';
import LoadingScreen from '../loading-screen/loading-screen';

const RoomContainer = (props) => {
  const {offer, offersNearby, comments, isOfferLoaded, isOffersNearbyLoaded, isCommentsLoaded, onLoadData} = props;
  const {id} = useParams();

  useEffect(() => {
    onLoadData(id);
  }, [id]);

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
  offersNearby: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  isOfferLoaded: PropTypes.bool.isRequired,
  isOffersNearbyLoaded: PropTypes.bool.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  offersNearby: state.offersNearby,
  comments: state.comments,
  isOfferLoaded: state.isOfferLoaded,
  isOffersNearbyLoaded: state.isOffersNearbyLoaded,
  isCommentsLoaded: state.isCommentsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchOffersNearby(id));
  }
});

export {RoomContainer};
export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);

