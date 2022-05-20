import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { expenses, edit } = this.props;
    console.log(this.props);
    const expense = expenses.find((exp) => exp.id === edit);
    return (
      <div>
        <Header />
        { Number.isInteger(edit) ? <EditForm expense={ expense } /> : <Form /> }
        { expenses.length && <Table /> }
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
