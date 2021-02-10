import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import MockData from './mock';

ReactDOM.render(
    <App cardsData={MockData} />,
    document.querySelector(`#root`)
);
