import {NameSpace} from '../root-reducer';

export const getFavotitesSelector = (state) => state[NameSpace.FAVORITES].favorite;
