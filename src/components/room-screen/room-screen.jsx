import React from 'react';
import Header from '../header/header';
import ReviewsList from './room-reviews-list';
import Map from '../map-screen/map-screen';
import Other from './room-other';
import {getStarsWidth} from '../../utils';
import PropTypes from 'prop-types';

const Room = (props) => {
  const {cardData, reviewsData, otherOffers} = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                cardData.images.length > 0 && (
                  cardData.images.map((element, index) => (
                    <div className="property__image-wrapper" key={index}>
                      <img className="property__image" src={element} alt="Photo studio" />
                    </div>
                  ))
                )
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                cardData.is_premium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {cardData.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStarsWidth(cardData.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{cardData.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {cardData.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {cardData.bedrooms} {cardData.bedrooms.length === 1 ? `Bedroom` : `Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {cardData.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{cardData.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    cardData.goods.map((element, index) => (
                      <li className="property__inside-item" key={index}>
                        {element}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={cardData.host.is_pro ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : ``}>
                    <img className="property__avatar user__avatar" src={cardData.host.avatar_url} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {cardData.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {cardData.description}
                  </p>
                </div>
              </div>
              <ReviewsList reviewsData={reviewsData} />
            </div>
          </div>
          <section className="property__map map">
            <Map />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffers.map((element, index) => (
                <Other key={index} otherOffer={element} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  cardData: PropTypes.object.isRequired,
  reviewsData: PropTypes.array,
  otherOffers: PropTypes.array
};

export default Room;
