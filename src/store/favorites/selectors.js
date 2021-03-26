import {NameSpace} from '../root-reducer';

export const getFavotites = (state) => state[NameSpace.FAVORITES].favorite;
