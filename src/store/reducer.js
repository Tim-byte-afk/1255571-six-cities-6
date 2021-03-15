import {SITIES, SORTING_TYPE, AUTHORIZATION_STATUS} from '../constants';
import {ActionType} from './action';

const initialState = {
  activeCity: SITIES.PARIS,
  offers: [],
  offer: {},
  offersNearby: [],
  favorite: [],
  comments: [],
  activeSorting: SORTING_TYPE.POPULAR,
  authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH,
  isDataLoaded: false,
  isOfferLoaded: false,
  isOffersNearbyLoaded: false,
  isCommentsLoaded: false,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
        isOffersNearbyLoaded: true
      };
    case ActionType.LOAD_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.RESET_DATA:
      return {
        ...state,
        isOfferLoaded: false,
        isOffersNearbyLoaded: false,
        isCommentsLoaded: false,
      };
  }

  return state;
};


export {reducer};
