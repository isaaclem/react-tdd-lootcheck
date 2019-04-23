import rootReducer from './index';

describe('rootReducer', () => {
  it('Initializes initial state', () => {
    expect(rootReducer({}, {}))
      .toEqual({ bitcoin: {}, balance: 0 });
  });
});
