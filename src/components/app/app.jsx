import React, {useEffect} from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import Login from '../login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import RoomContainer from '../room-screen/room-container';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Favorites from '../favorites-screen/favorites-screen';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../constants.js';

import {fetchOffersList} from '../../store/offer/operations';
import {checkAuth} from '../../store/user/operations';
import LoadingScreen from '../loading-screen/loading-screen';

import {getOffers, getLoadStatus} from '../../store/offer/selectors.js';

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
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact >
          <MainScreen cardsData={offers} />
        </Route>
        <PrivateRoute path={AppRoute.FAVORITES} exact render={() => <Favorites /> } />
        <Route path={AppRoute.LOGIN} exact >
          <Login />
        </Route>
        <Route path={AppRoute.OFFER} exact >
          <RoomContainer />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  isDataLoaded: getLoadStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
    dispatch(checkAuth());
  }
});

App.propTypes = {
  offers: PropTypes.array.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
