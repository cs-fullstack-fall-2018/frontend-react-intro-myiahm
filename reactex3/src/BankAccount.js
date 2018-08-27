import React, { Component } from 'react';

class BankAccount extends Component {
    render() {
        return (
            <div className="BankAccount">
                <h1>{this.props.firstname} has a balance of ${this.props.accountbalance}.</h1>
            </div>
        );
    }
}

export default BankAccount;
