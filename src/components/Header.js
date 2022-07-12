import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './HeaderStyle.css';
import { FaUserCircle } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const sum = expenses.reduce((prev, curr) => {
      const cotacao = curr.exchangeRates[curr.currency].ask;
      const soma = Number(cotacao) * Number(curr.value);
      return prev + soma;
    }, 0);
    return (
      <div className="header-container">
        <h1>
          Trybe
          <font color="#ED6A5A">W</font>
          allet
        </h1>
        <h2 data-testid="email-field">
          <FaUserCircle />
          {' '}
          { email }
        </h2>
        <div className="total">
          <p id="valor" data-testid="total-field">
            { sum.toFixed(2) }
          </p>
          <p id="br" data-testid="header-currency-field">BRL</p>
        </div>

      </div>);
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
