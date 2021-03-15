export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFER: `offers/loadOffer`,
  LOAD_OFFERS_NEARBY: `offers/loadOffersNearby`,
  LOAD_FAVORITE: `offers/loadFavorite`,
  LOAD_COMMENTS: `offers/loadComments`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  RESET_DATA: `offers/reset`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  loadOffers: (data) => ({
    type: ActionType.LOAD_OFFERS,
    payload: data
  }),
  loadOffer: (data) => ({
    type: ActionType.LOAD_OFFER,
    payload: data
  }),
  loadOffersNearby: (data) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: data
  }),
  loadFavorite: (data) => ({
    type: ActionType.LOAD_FAVORITE,
    payload: data
  }),
  loadComments: (data) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: data
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  reset: () => ({
    type: ActionType.RESET_DATA,
  }),
};
