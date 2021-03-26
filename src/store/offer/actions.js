export const ActionType = {
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFER: `offers/loadOffer`,
  LOAD_OFFERS_NEARBY: `offers/loadOffersNearby`,
  LOAD_COMMENTS: `offers/loadComments`,
  RESET_DATA: `offers/reset`,
  OFFER_NOT_FOUND: `offer/notFound`
};

export const loadOffers = (data) => ({
  type: ActionType.LOAD_OFFERS,
  payload: data
});

export const loadOffer = (data) => ({
  type: ActionType.LOAD_OFFER,
  payload: data
});

export const loadOffersNearby = (data) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: data
});

export const loadComments = (data) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: data
});

export const reset = () => ({
  type: ActionType.RESET_DATA,
});

export const offerNotFound = (data) => ({
  type: ActionType.OFFER_NOT_FOUND,
  payload: data
});
