import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from './store/middlewares/redirect';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {createAPI} from './api';
import {requiredAuthorization} from './store/user/actions';
import {AuthorizationStatus} from './constants';
import {checkAuth} from './store/user/operations';
import browserHistory from "./browser-history";

const api = createAPI(
    () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
