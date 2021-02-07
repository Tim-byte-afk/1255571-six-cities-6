import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cardsCount} = props;
  return (
    <MainScreen cardsCount={cardsCount} />
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
