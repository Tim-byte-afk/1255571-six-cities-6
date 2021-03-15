import {ActionCreator} from './action';
import {AUTHORIZATION_STATUS} from '../constants';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => dispatch(ActionCreator.offerNotFound(true)));
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)));
};

export const fetchFavorite = () => (dispatch, _getState, api) => {
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavorite(data)));
};

export const postFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.loadFavorite(data)));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};

export const postComments = (id, comment, rating) => (dispatch, _getState, api) => {
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};


export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then((dataObj) => dispatch(ActionCreator.setAuthInfo(dataObj.data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then((dataObj) => dispatch(ActionCreator.setAuthInfo(dataObj.data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.NO_AUTH)));
};
