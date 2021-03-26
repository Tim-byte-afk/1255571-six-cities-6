import {reducer} from './reducer';
import {ActionType} from './actions';
import {SITIES, SORTING_TYPE} from '../../constants';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, ActionType.CHANGE_CITY))
      .toEqual({
        activeCity: SITIES.PARIS,
        activeSorting: SORTING_TYPE.POPULAR
      });
  });

  it(`Reducer should add city offer`, () => {
    const state = {
      activeCity: SITIES.PARIS,
    };

    const addSityAction = {
      type: ActionType.CHANGE_CITY,
      payload: SITIES.BRUSSELS,
    };

    expect(reducer(state, addSityAction))
      .toEqual({activeCity: SITIES.BRUSSELS});
  });

  it(`Reducer should add sorting type offer`, () => {
    const state = {
      activeSorting: SORTING_TYPE.POPULAR,
    };

    const addFavoriteAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SORTING_TYPE.RATED_FIRST,
    };

    expect(reducer(state, addFavoriteAction))
      .toEqual({activeSorting: SORTING_TYPE.RATED_FIRST});
  });
});
