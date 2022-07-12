import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, fetchPrice } from '../actions';
import './FormStyle.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { fetchCurrencyList } = this.props;
    fetchCurrencyList();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    const { AddExpenses, expenses } = this.props;
    const { value, currency, method, tag, description } = this.state;
    event.preventDefault();
    AddExpenses({ id: expenses.length, value, currency, method, tag, description });
    this.setState({
      value: '',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <div className="div-form-container">
        <form id="borda-form">
          <div>
            <label htmlFor="inputValor">
              Valor:
              {' '}
              <input
                autoComplete="off"
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
              {' '}
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
              {' '}
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
          </div>
          <div>
            <label id="categoria1" htmlFor="inputCategoria">
              Categoria:
              {' '}
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
              {' '}
              <input
                autoComplete="off"
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
              onClick={ this.handleSubmit }
            >
              Adicionar Despesa
            </button>
          </div>
        </form>
      </div>);
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
  expenses: globalState.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyList: () => dispatch(fetchCurrency()),
  AddExpenses: (data) => dispatch(fetchPrice(data)),
});

Form.propTypes = {
  fetchCurrencyList: PropTypes.func.isRequired,
  AddExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
