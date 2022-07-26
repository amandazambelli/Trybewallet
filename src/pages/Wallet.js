import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import EditForm from '../components/EditForm';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    const { expenses, edit } = this.props;
    console.log(this.props);
    const expense = expenses.find((exp) => exp.id === edit);
    return (
      <div>
        <Header />
        <p>
          <p id="texto">
            Sua carteira de gastos para maior controle de despesas dentro e
            fora do país, com taxas de câmbio em tempo real.
          </p>
        </p>
        { Number.isInteger(edit) ? <EditForm expense={ expense } /> : <Form /> }
        { expenses.length ? <Table /> : null }
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
  edit: globalState.wallet.edit,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  edit: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
