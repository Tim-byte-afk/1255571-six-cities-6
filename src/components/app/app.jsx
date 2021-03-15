import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import Login from '../login-screen/login-screen';
import Favorites from '../favorites-screen/favorites-screen';
import RoomContainer from '../room-screen/room-container';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {fetchOffersList} from '../../store/api-actions.js';
import reviews from '../../mocks/reviews.js';
import LoadingScreen from '../loading-screen/loading-screen';

const App = (props) => {
  const {offers, isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <MainScreen cardsData={offers} />
        </Route>
        <Route path="/favorites" exact >
          <Favorites />
        </Route>
        <Route path="/login" exact >
          <Login />
        </Route>
        <Route path="/offer/:id" exact >
          <RoomContainer cardsData={offers} reviewsData={reviews} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  }
});

App.propTypes = {
  offers: PropTypes.array,
  onLoadData: PropTypes.func,
  isDataLoaded: PropTypes.bool
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
