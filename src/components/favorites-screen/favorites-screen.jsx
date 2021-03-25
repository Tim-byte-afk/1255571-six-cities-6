import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStarsWidth} from '../../utils';
import {Link} from 'react-router-dom';
import {postFavorite} from '../../store/api-actions.js';
import {FavoriteStatus, AppRoute} from '../../constants';
import {ActionCreator} from '../../store/action';

import {fetchFavorite} from '../../store/api-actions.js';
import FavoritesEmpty from './favorites-empty';

import cn from 'classnames';

const Favorites = (props) => {
  const {onLoadData, favorite = [], onButtonClick, onChangeCity} = props;

  useEffect(() => {
    onLoadData();
  }, [favorite]);

  const favoriteByCity = favorite.reduce((acc, cur) => {
    acc[cur.city.name] = acc[cur.city.name] ? [...(acc[cur.city.name]), cur] : [cur];
    return acc;
  }, {});

  const handleFavoriteClick = (id, isFavorite) => {
    onButtonClick(id, isFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD);
    onLoadData();
  };

  const handleChangeCityClick = (city) => {
    onChangeCity(city);
  };

  return (
    <React.Fragment>
      <div className="page">
        <Header />
        {
          favorite.length === 0 ? <FavoritesEmpty />
            :
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {Object.entries(favoriteByCity).map(([city, savedOffers]) => (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link" to={AppRoute.MAIN} onClick={() => handleChangeCityClick(city)}>
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {savedOffers.map((element) => (
                            <article className="favorites__card place-card" key={element.id}>
                              {
                                element.is_premium && (
                                  <div className="place-card__mark">
                                    <span>Premium</span>
                                  </div>
                                )
                              }
                              <div className="favorites__image-wrapper place-card__image-wrapper">
                                <Link to={`/offer/${element.id}`}>
                                  <img className="place-card__image" src={element.preview_image} width="150" height="110" alt="Place image" />
                                </Link>
                              </div>
                              <div className="favorites__card-info place-card__info">
                                <div className="place-card__price-wrapper">
                                  <div className="place-card__price">
                                    <b className="place-card__price-value">&euro;{element.price}</b>
                                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                                  </div>
                                  <button className={cn(`button place-card__bookmark-button`, {'place-card__bookmark-button--active': element.is_favorite})} type="button" onClick={() => handleFavoriteClick(element.id, element.is_favorite)}>
                                    <svg className="place-card__bookmark-icon" width="18" height="19">
                                      <use xlinkHref="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">In bookmarks</span>
                                  </button>
                                </div>
                                <div className="place-card__rating rating">
                                  <div className="place-card__stars rating__stars">
                                    <span style={{width: `${getStarsWidth(element.rating)}%`}}></span>
                                    <span className="visually-hidden">Rating</span>
                                  </div>
                                </div>
                                <h2 className="place-card__name">
                                  <a href="#">{element.title}</a>
                                </h2>
                                <p className="place-card__type">{element.type}</p>
                              </div>
                            </article>
                          ))
                          }
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>
        }
        <Footer />
      </div>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  favorite: PropTypes.array.isRequired,
  onLoadData: PropTypes.func,
  onButtonClick: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({FAVORITES}) => ({
  favorite: FAVORITES.favorite,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavorite());
  },
  onButtonClick(id, status) {
    dispatch(postFavorite(id, status));
  },
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
