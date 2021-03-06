import React, { Component } from 'react';
import { connect } from 'react-redux';

import { depositAmount, withdrawAmount } from '../actions/balance';

export class Wallet extends Component {
  state = { balance: 0 };

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value, 10) });
  }

  deposit = () => this.props.depositAmount(this.state.balance);

  withdraw = () => this.props.withdrawAmount(this.state.balance);

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
        <br />
        <input 
          className='input-wallet' 
          onChange={this.updateBalance} 
        />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { balance: state };
// }

export default connect(state => ({ balance: state.balance }), { depositAmount, withdrawAmount })(Wallet);