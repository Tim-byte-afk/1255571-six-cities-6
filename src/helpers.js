import {SORTING_TYPE} from './constants';

export const sorting = (data, activeSorting) => {
  if (activeSorting === SORTING_TYPE.PRICE_HIGH_LOW) {
    return data.sort((a, b) => (b.price - a.price));
  } else if (activeSorting === SORTING_TYPE.PRICE_LOW_HIGH) {
    return data.sort((a, b) => (a.price - b.price));
  } else if (activeSorting === SORTING_TYPE.RATED_FIRST) {
    return data.sort((a, b) => (b.rating - a.rating));
  }

  return data;
};

export const sortingDate = (data) => {
  return data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export const getFavoritesByCity = (favorites) => {
  return favorites.reduce((acc, cur) => {
    acc[cur.city.name] = acc[cur.city.name] ? [...(acc[cur.city.name]), cur] : [cur];
    return acc;
  }, {});
};
