import {SITIES, SORTING_TYPE} from '../../constants';
import {ActionType} from './actions';

const initialState = {
  activeCity: SITIES.PARIS,
  activeSorting: SORTING_TYPE.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        activeSorting: action.payload
      };
  }

  return state;
};


export {reducer};
