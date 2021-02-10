import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

const App = ({cardsData}) => {
  return (
    <MainScreen cardsData={cardsData} />
  );
};

App.propTypes = {
  cardsData: PropTypes.array,
};

export default App;
