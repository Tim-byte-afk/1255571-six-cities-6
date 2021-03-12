import React, {useState} from 'react';
import CardListScreen from '../card-list-screen/card-list-screen';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import Sorting from '../sorting/sorting';
import Map from '../map-screen/map-screen';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import {SORTING_TYPE} from '../../constants.js';

const MainScreen = (props) => {
  const {cardsData = [], activeCity, activeSorting} = props;
  const [activeCardId, setActiveCardId] = useState(null);

  const handleMouseOn = (cardId) => {
    setActiveCardId(String(cardId));
  };

  const handleMouseOff = () => {
    setActiveCardId(null);
  };

  let cityCards = [];
  if (cardsData.length > 0) {
    cityCards = cardsData.filter((card) => card.city.name === String(activeCity));

    if (activeSorting === SORTING_TYPE.PRICE_HIGH_LOW) {
      cityCards.sort((a, b) => (b.price - a.price));
    } else if (activeSorting === SORTING_TYPE.PRICE_LOW_HIGH) {
      cityCards.sort((a, b) => (a.price - b.price));
    } else if (activeSorting === SORTING_TYPE.RATED_FIRST) {
      cityCards.sort((a, b) => (b.rating - a.rating));
    }
  }

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            {
              cityCards.length > 0
                ?
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{cityCards.length} places to stay in {activeCity}</b>
                    <Sorting />
                    <CardListScreen
                      cardsData={cityCards}
                      onMouseEnter={handleMouseOn}
                      onMouseLeave={handleMouseOff}
                    />
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map points={cityCards} activeCard={activeCardId} />
                    </section>
                  </div>
                </div>
                :
                <div className="cities__places-container cities__places-container--empty container">
                  <section className="cities__no-places">
                    <div className="cities__status-wrapper tabs__content">
                      <b className="cities__status">No places to stay available</b>
                      <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                    </div>
                  </section>
                  <div className="cities__right-section"></div>
                </div>
            }
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  cardsData: PropTypes.array,
  activeCity: PropTypes.string.isRequired,
  activeSorting: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeSorting: state.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
