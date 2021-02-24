import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getStarsWidth} from '../../utils';

const CardScreen = (props) => {
  const {cardData, onMouseEnter, onMouseLeave} = props;

  const handleMouseOn = (id) => () => onMouseEnter(id);

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseOn(cardData.id)} onMouseLeave={onMouseLeave}>
      {
        cardData.is_premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${cardData.id}`}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getStarsWidth(cardData.rating)}%`}} ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${cardData.id}`}>
            {cardData.title}
          </Link>
        </h2>
        <p className="place-card__type">{cardData.type}</p>
      </div>
    </article>
  );
};

CardScreen.propTypes = {
  cardData: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default CardScreen;
