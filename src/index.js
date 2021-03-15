import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {redirect} from './store/middlewares/redirect';

import App from './components/app/app';
import {createAPI} from './api';
import {ActionCreator} from './store/action';
import {AUTHORIZATION_STATUS} from './constants';
import {checkAuth} from './store/api-actions';

const api = createAPI(
    () => store.dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
