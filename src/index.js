import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from './store/middlewares/redirect';

import App from './components/app/app';
import {createAPI} from './api';
import {requiredAuthorization} from './store/user/actions';
import {AUTHORIZATION_STATUS} from './constants';
import {checkAuth} from './store/user/operations';

const api = createAPI(
    () => store.dispatch(requiredAuthorization(AUTHORIZATION_STATUS.NO_AUTH))
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
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
