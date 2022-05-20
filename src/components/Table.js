import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteButton, editButton } from '../actions';

class Table extends React.Component {
  handleEdit = (expenseID) => {
    const { EditThisExpense } = this.props;
    EditThisExpense(expenseID);
  }

  handleRemove = (expenseID) => {
    const { deleteThisExpense } = this.props;
    deleteThisExpense(expenseID);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ Number(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(expense.value)
                * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.handleEdit(expense.id) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleRemove(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>);
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteThisExpense: (id) => dispatch(deleteButton(id)),
  EditThisExpense: (id) => dispatch(editButton(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  deleteThisExpense: PropTypes.func.isRequired,
  EditThisExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
