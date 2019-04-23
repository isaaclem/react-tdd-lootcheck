import * as constants from '../actions/constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'balance_cookie';

const balance = (state = 0, action) => {
  let balance;

  switch(action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT_BALANCE:
      balance = state + action.depositAmount;
      break;
    case constants.WITHDRAW_BALANCE:
      balance = state - action.withdrawAmount;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
      break;
  }
  bake_cookie(BALANCE_COOKIE, balance);
  return balance;
}

export default balance;
