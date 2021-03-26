import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserInfo = (state) => state[NameSpace.USER].userInfo;
