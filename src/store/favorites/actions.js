export const ActionType = {
  LOAD_FAVORITE: `offers/loadFavorite`,
};

export const loadFavorite = (data) => ({
  type: ActionType.LOAD_FAVORITE,
  payload: data
});
