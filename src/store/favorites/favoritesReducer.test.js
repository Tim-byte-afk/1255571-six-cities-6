import {favoritesReducer} from './favoritesReducer';
import {ActionType} from '../action';
import {favOfferRaw} from './test.mocks';

describe(`Favorites reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(favoritesReducer(undefined, ActionType.LOAD_FAVORITE))
      .toEqual({favorite: []});
  });

  it(`Reducer should add favorite offer`, () => {
    const state = {
      favorite: [],
    };

    const addFavoriteAction = {
      type: ActionType.LOAD_FAVORITE,
      payload: favOfferRaw,
    };

    expect(favoritesReducer(state, addFavoriteAction))
      .toEqual({favorite: favOfferRaw});
  });
});
