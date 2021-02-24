import React from 'react';
import {useParams} from 'react-router-dom';
import Room from './room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';

const RoomContainer = (props) => {
  const {cardsData, reviewsData} = props;

  const {id} = useParams();
  const offer = cardsData.find((item) => item.id === Number(id));
  const otherOffers = cardsData.slice(0, 3);

  if (offer) {
    return (
      <Room cardData={offer} reviewsData={reviewsData} otherOffers={otherOffers} />
    );
  }

  return <NotFoundScreen />;
};

RoomContainer.propTypes = {
  cardsData: PropTypes.array.isRequired,
  reviewsData: PropTypes.array.isRequired,
};

export default RoomContainer;
