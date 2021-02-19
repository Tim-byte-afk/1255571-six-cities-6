import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Login from '../login-screen/login-screen';
import Favorites from '../favorites-screen/favorites-screen';
import RoomContainer from '../room-screen/room-container';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <MainScreen {...props}/>
        </Route>
        <Route path="/favorites" exact >
          <Favorites />
        </Route>
        <Route path="/login" exact >
          <Login />
        </Route>
        <Route path="/offer/:id" exact >
          <RoomContainer {...props} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
