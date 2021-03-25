import {ActionType, ActionCreator} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator change city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `test`,
    };

    expect(ActionCreator.changeCity(`test`)).toEqual(expectedAction);
  });

  it(`Action creator change sort type returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `test`,
    };

    expect(ActionCreator.changeSortType(`test`)).toEqual(expectedAction);
  });

  it(`Action creator change sort type returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `test`,
    };

    expect(ActionCreator.changeSortType(`test`)).toEqual(expectedAction);
  });

  it(`Action creator load comments returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: `test`,
    };

    expect(ActionCreator.loadComments(`test`)).toEqual(expectedAction);
  });

  it(`Action creator load favorite returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE,
      payload: `test`,
    };

    expect(ActionCreator.loadFavorite(`test`)).toEqual(expectedAction);
  });

  it(`Action creator load offer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: `test`,
    };

    expect(ActionCreator.loadOffer(`test`)).toEqual(expectedAction);
  });

  it(`Action creator load offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: `test`,
    };

    expect(ActionCreator.loadOffers(`test`)).toEqual(expectedAction);
  });

  it(`Action creator load offers nearby returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: `test`,
    };

    expect(ActionCreator.loadOffersNearby(`test`)).toEqual(expectedAction);
  });

  it(`Action creator offer not found returns correct action`, () => {
    const expectedAction = {
      type: ActionType.OFFER_NOT_FOUND,
      payload: `test`,
    };

    expect(ActionCreator.offerNotFound(`test`)).toEqual(expectedAction);
  });

  it(`Action creator redirect to route returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `test`,
    };

    expect(ActionCreator.redirectToRoute(`test`)).toEqual(expectedAction);
  });

  it(`Action creator required auth returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `test`,
    };

    expect(ActionCreator.requiredAuthorization(`test`)).toEqual(expectedAction);
  });

  it(`Action creator load offer not found returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_DATA,
    };

    expect(ActionCreator.reset()).toEqual(expectedAction);
  });

  it(`Action creator set auth info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: `test`,
    };

    expect(ActionCreator.setAuthInfo(`test`)).toEqual(expectedAction);
  });
});
