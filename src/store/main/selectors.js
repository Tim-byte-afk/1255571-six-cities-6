import {NameSpace} from '../root-reducer';

export const getActiveCitySelector = (state) => state[NameSpace.MAIN].activeCity;
export const getActiveSortingSelector = (state) => state[NameSpace.MAIN].activeSorting;
