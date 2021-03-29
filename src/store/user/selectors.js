import {NameSpace} from '../root-reducer';

export const getAuthStatusSelector = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserInfoSelector = (state) => state[NameSpace.USER].userInfo;
