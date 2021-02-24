import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CardScreen from '../card-screen/card-screen';

const CardListScreen = (props) => {
  const {cardsData = []} = props;
  const [, setActiveCardId] = useState(null);

  const handleMouseOn = (cardId) => {
    setActiveCardId(String(cardId));
  };

  const handleMouseOff = () => {
    setActiveCardId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsData.map((element) => (
        <CardScreen
          cardData={element}
          key={element.id}
          onMouseEnter={handleMouseOn}
          onMouseLeave={handleMouseOff}
        />
      ))}
    </div>
  );
};

CardListScreen.propTypes = {
  cardsData: PropTypes.array.isRequired,
};

export default CardListScreen;
