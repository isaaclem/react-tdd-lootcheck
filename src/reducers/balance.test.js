import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance);
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
