import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App cardsData={offers} reviewsData={reviews} />,
    </Provider>,
    document.querySelector(`#root`)
);
