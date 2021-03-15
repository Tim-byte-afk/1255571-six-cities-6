import {ActionCreator} from './action';
import {AUTHORIZATION_STATUS} from '../constants';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)));
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)));
};

export const fetchFavorite = () => (dispatch, _getState, api) => {
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavorite(data)));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};


export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.get(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requiredAuthorization(AUTHORIZATION_STATUS.AUTH)));
};
