import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { fetchCurrencyList } = this.props;
    fetchCurrencyList();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    const getCurr = currencies.filter((cur) => cur !== 'USDT');
    console.log(getCurr);
    return (
      <div>
        <form>
          <label htmlFor="inputValor">
            Valor:
            <input
              id="inputValor"
              data-testid="value-input"
              type="text"
              name="valor"
              value="valor"
            />
          </label>
          <label htmlFor="inputMoeda">
            Moeda:
            <select id="inputMoeda">
              { getCurr.map((curr) => <option key={ curr } value={ curr }>{ curr }</option>) }
            </select>
          </label>
          <label htmlFor="inputMetodo">
            Método de pagamento:
            <select id="inputMetodo" data-testid="method-input">
              <option value="dinheiro">Dinheiro</option>
              <option value="debito">Cartão de débito</option>
              <option value="credito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="inputCategoria">
            Categoria:
            <select id="inputCategoria" data-testid="tag-input">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <label htmlFor="inputDescription">
            Descrição:
            <input
              id="inputDescription"
              data-testid="description-input"
              type="text"
              name="description"
              value="description"
            />
          </label>
          <button
            type="button"
          >
            Adicionar Despesa
          </button>
        </form>
      </div>);
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyList: () => dispatch(fetchCurrency()),
});

Form.propTypes = {
  fetchCurrencyList: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
