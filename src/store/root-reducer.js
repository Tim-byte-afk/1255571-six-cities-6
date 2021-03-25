import {combineReducers} from 'redux';
import {favoritesReducer} from './favorites/favoritesReducer';
import {mainReducer} from './main/mainReducer';
import {offerReducer} from './offer/offerReducer';
import {userReducer} from './user/userReducer';

export const NameSpace = {
  FAVORITES: `FAVORITES`,
  MAIN: `MAIN`,
  OFFER: `OFFER`,
  USER: `USER`,
};

const rootReducer = combineReducers({
  [NameSpace.FAVORITES]: favoritesReducer,
  [NameSpace.MAIN]: mainReducer,
  [NameSpace.OFFER]: offerReducer,
  [NameSpace.USER]: userReducer,
});

export {rootReducer};
