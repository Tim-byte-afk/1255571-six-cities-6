import {NameSpace} from '../root-reducer';

export const getOffersSelector = (state) => state[NameSpace.OFFER].offers;
export const getOfferSelector = (state) => state[NameSpace.OFFER].offer;
export const getOffersNearbySelector = (state) => state[NameSpace.OFFER].offersNearby;
export const getCommentsSelector = (state) => state[NameSpace.OFFER].comments;
export const getStatusLoadOfferSelector = (state) => state[NameSpace.OFFER].isOfferLoaded;
export const getStatusLoadOffersNearbySelector = (state) => state[NameSpace.OFFER].isOffersNearbyLoaded;
export const getStatusLoadCommentsSelector = (state) => state[NameSpace.OFFER].isCommentsLoaded;
export const getStatusNotFoundOfferSelector = (state) => state[NameSpace.OFFER].offerNotFound;
export const getLoadStatusSelector = (state) => state[NameSpace.OFFER].isDataLoaded;
export const getCommentStatusPendingSelector = (state) => state[NameSpace.OFFER].statusCommentSending;
