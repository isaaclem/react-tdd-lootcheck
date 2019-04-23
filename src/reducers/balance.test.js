import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  describe('initialization', () => {
    const balance = 10;

    it('sets a balance', () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads balance from cookies', () => {
        expect(balanceReducer2(undefined, {}))
          .toEqual(balance);
      })
    })
  });

  it('deposits an amount', () => {
    const depositAmount = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: constants.DEPOSIT_BALANCE, depositAmount }))
      .toEqual(depositAmount+initialState);
  });

  it('withdraws an amount', () => {
    const initialState = 20;
    const withdrawAmount = 8;
    const reduxAction = { type: constants.WITHDRAW_BALANCE, withdrawAmount };

    expect(balanceReducer(initialState, reduxAction))
      .toEqual(initialState - withdrawAmount);
  })
});
