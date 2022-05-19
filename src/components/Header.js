import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const sum = expenses.reduce((prev, curr) => {
      const cotacao = curr.exchangeRates[curr.currency].ask;
      const soma = Number(cotacao) * Number(curr.value);
      return prev + soma;
    }, 0);
    return (
      <div>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">
          { sum.toFixed(2) }
        </p>
        <p data-testid="header-currency-field">BRL</p>

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
