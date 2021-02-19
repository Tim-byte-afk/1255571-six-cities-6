import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import Room from './room-screen';
import PropTypes from 'prop-types';

const RoomContainer = (props) => {
  const {cardsData, reviewsData} = props;

  const {id} = useParams();
  const offer = cardsData.find((item) => item.id === +id);
  const otherOffers = [cardsData[0], cardsData[1], cardsData[2]];

  if (offer) {
    return (
      <Room cardData={offer} reviewsData={reviewsData} otherOffers={otherOffers} />
    );
  }

  return <Redirect to="/" />;
};

RoomContainer.propTypes = {
  cardsData: PropTypes.array.isRequired,
  reviewsData: PropTypes.array.isRequired,
};

export default RoomContainer;
