import {ActionType} from '../action';

const initialState = {
  favorite: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };
  }

  return state;
};


export {favoritesReducer};
