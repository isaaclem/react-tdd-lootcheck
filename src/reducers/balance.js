import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
  switch(action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT_BALANCE:
      return state + action.depositAmount;
    case constants.WITHDRAW_BALANCE:
      return state - action.withdrawAmount;
    default:
      return state;
  }
}

export default balance;
