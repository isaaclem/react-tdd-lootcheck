import * as constants from './constants';

export const setBalance = balance => {
  return { type: constants.SET_BALANCE, balance };
};

export const depositAmount = depositAmount => {
  return { type: constants.DEPOSIT_BALANCE, depositAmount };
};

export const withdrawAmount = withdrawAmount => {
  return { type: constants.WITHDRAW_BALANCE, withdrawAmount };
}