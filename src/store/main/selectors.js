import {NameSpace} from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.MAIN].activeCity;
export const getActiveSorting = (state) => state[NameSpace.MAIN].activeSorting;
