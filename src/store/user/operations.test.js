import MockAdapter from 'axios-mock-adapter';
import {reducer} from './reducer';
import {createAPI} from '../../api';
import * as operations from './operations';
import {ActionType} from './actions';
import {ApiRoute, AppRoute, AUTHORIZATION_STATUS} from '../../constants';
import {auth} from '../tests.mocks';

const api = createAPI(() => {});

describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, ActionType.REQUIRED_AUTHORIZATION))
      .toEqual({
        authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH,
        userInfo: {}
      });
  });

  it(`Reducer should update authorizationStatus to 'auth'`, () => {
    const state = {authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AUTHORIZATION_STATUS.AUTH
    };

    expect(reducer(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AUTHORIZATION_STATUS.AUTH});
  });

});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = operations.checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, auth);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: auth,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AUTHORIZATION_STATUS.AUTH,
        });
      });
  });

  it(`Should make a correct API post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = operations.login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, auth);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: auth,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AUTHORIZATION_STATUS.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `middlewares/redirectToRoute`,
          payload: AppRoute.MAIN,
        });
      });
  });
});
