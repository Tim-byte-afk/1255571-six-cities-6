import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

ReactDOM.render(
    <App cardsData={offers} reviewsData={reviews} />,
    document.querySelector(`#root`)
);
