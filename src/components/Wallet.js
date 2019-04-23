import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
      </div>
    )
  }
}

export default connect(state => ({ balance: state }))(Wallet);