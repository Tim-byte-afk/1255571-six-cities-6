import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.OFFER].offers;
export const getOffer = (state) => state[NameSpace.OFFER].offer;
export const getOffersNearby = (state) => state[NameSpace.OFFER].offersNearby;
export const getComments = (state) => state[NameSpace.OFFER].comments;
export const getStatusLoadOffer = (state) => state[NameSpace.OFFER].isOfferLoaded;
export const getStatusLoadOffersNearby = (state) => state[NameSpace.OFFER].isOffersNearbyLoaded;
export const getStatusLoadComments = (state) => state[NameSpace.OFFER].isCommentsLoaded;
export const getStatusNotFoundOffer = (state) => state[NameSpace.OFFER].offerNotFound;
export const getLoadStatus = (state) => state[NameSpace.OFFER].isDataLoaded;
