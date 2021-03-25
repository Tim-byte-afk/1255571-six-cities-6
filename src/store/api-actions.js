import {ActionCreator} from './action';
import {AUTHORIZATION_STATUS, ApiRoute} from '../constants';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(ApiRoute.HOTELS_BY_ID.replace(`:id`, id))
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => dispatch(ActionCreator.offerNotFound(true)));
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  api.get(ApiRoute.HOTELS_NEARBY.replace(`:id`, id))
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)));
};

export const fetchFavorite = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.loadFavorite(data)));
};

export const postFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(ApiRoute.FAVORITE_BY_ID.replace(`:id`, id).replace(`:status`, status));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  api.get(ApiRoute.COMMENTS_BY_ID.replace(`:id`, id))
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};

export const postComments = (id, comment, rating) => (dispatch, _getState, api) => {
  api.post(ApiRoute.COMMENTS_BY_ID.replace(`:id`, id), {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};


export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then((dataObj) => dispatch(ActionCreator.setAuthInfo(dataObj.data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then((dataObj) => dispatch(ActionCreator.setAuthInfo(dataObj.data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.NO_AUTH)));
};
