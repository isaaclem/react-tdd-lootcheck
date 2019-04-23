import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;

  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance))
    .toEqual(expectedAction);
});

it('creates an action to deposit into balance', () => {
  const depositAmount = 20;

  const expectedAction = { type: constants.DEPOSIT_BALANCE, depositAmount };

  expect(actions.depositAmount(depositAmount))
    .toEqual(expectedAction);
});

it('creates an action to withdraw from balance', () => {
  const withdrawAmount = 10;

  const expectedAction = { type: constants.WITHDRAW_BALANCE, withdrawAmount };

  expect(actions.withdrawAmount(withdrawAmount))
    .toEqual(expectedAction);
})