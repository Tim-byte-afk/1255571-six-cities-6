import {requiredAuthorization, setAuthInfo} from './actions';
import {redirectToRoute} from '../middlewares/actions';
import {AUTHORIZATION_STATUS, ApiRoute} from '../../constants';

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then((dataObj) => dispatch(setAuthInfo(dataObj.data)))
    .then(() => dispatch(requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then((dataObj) => dispatch(setAuthInfo(dataObj.data)))
    .then(() => dispatch(requiredAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)));
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(requiredAuthorization(AUTHORIZATION_STATUS.NO_AUTH)));
};
