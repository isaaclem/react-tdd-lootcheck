import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockWithdraw = jest.fn();
  const mockDeposit = jest.fn();
  const props =  { balance: 20, depositAmount: mockDeposit, withdrawAmount: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('display the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('When the user types into the wallet input', () => {
    const userBalance = '25'; 

    beforeEach(() => {
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: userBalance }});
    });

    it('updates a local balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click')
      });

      it('dispatches the `deposit()` it receives from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('and the user wants to withdraw a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click')
      });

      it('dispatches the `withdraw()` it receives from props with local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
