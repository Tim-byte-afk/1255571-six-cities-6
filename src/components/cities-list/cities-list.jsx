import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SITIES} from '../../constants';

import cn from 'classnames';

const CitiesList = (props) => {
  const {activeCity, onChangeCity} = props;

  const handleChangeCityClick = (evt) => {
    evt.preventDefault();
    onChangeCity(evt.target.innerText);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(SITIES).map((city) => (
        <li className="locations__item" key={city}>
          <a className={cn(`locations__item-link tabs__item`, {'tabs__item--active': city === activeCity})} href="#" onClick={handleChangeCityClick}>
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
