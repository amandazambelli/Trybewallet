import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editedInfos } from '../actions';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.expense.id,
      value: props.expense.value,
      currency: props.expense.currency,
      method: props.expense.method,
      tag: props.expense.tag,
      description: props.expense.description,
      exchangeRates: props.expense.exchangeRates,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleEdit = () => {
    const { dispatch } = this.props;
    dispatch(editedInfos(this.state));
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="inputValor">
            Valor:
            <input
              id="inputValor"
              data-testid="value-input"
              type="text"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputMoeda">
            Moeda:
            <select
              id="inputMoeda"
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map((curr) => <option key={ curr }>{ curr }</option>) }
            </select>
          </label>
          <label htmlFor="inputMetodo">
            Método de pagamento:
            <select
              id="inputMetodo"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="inputCategoria">
            Categoria:
            <select
              id="inputCategoria"
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="inputDescription">
            Descrição:
            <input
              id="inputDescription"
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleEdit }
          >
            Editar despesa
          </button>
        </form>
      </div>);
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

EditForm.propTypes = {
  currencies: PropTypes.string.isRequired,
  expense: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(EditForm);
