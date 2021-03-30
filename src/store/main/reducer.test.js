import {reducer} from './reducer';
import {ActionType} from './actions';
import {Sities, SortingType} from '../../constants';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, ActionType.CHANGE_CITY))
      .toEqual({
        activeCity: Sities.PARIS,
        activeSorting: SortingType.POPULAR
      });
  });

  it(`Reducer should add city offer`, () => {
    const state = {
      activeCity: Sities.PARIS,
    };

    const addSityAction = {
      type: ActionType.CHANGE_CITY,
      payload: Sities.BRUSSELS,
    };

    expect(reducer(state, addSityAction))
      .toEqual({activeCity: Sities.BRUSSELS});
  });

  it(`Reducer should add sorting type offer`, () => {
    const state = {
      activeSorting: SortingType.POPULAR,
    };

    const addFavoriteAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortingType.RATED_FIRST,
    };

    expect(reducer(state, addFavoriteAction))
      .toEqual({activeSorting: SortingType.RATED_FIRST});
  });
});
