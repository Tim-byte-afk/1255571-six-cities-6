import {AUTHORIZATION_STATUS} from '../../constants';
import {ActionType} from './actions';

const initialState = {
  authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH,
  userInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
  }

  return state;
};


export {reducer};
