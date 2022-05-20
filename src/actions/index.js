export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_CURRENCY_LIST = 'SET_CURRENCY_LIST';
export const GET_EXPENSES = 'GET_EXPENSES';
export const SET_PRICES = 'SET_PRICES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const saveUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setCurrency = (currencyList) => ({
  type: SET_CURRENCY_LIST,
  payload: currencyList,
});

export const fetchCurrency = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const key = Object.keys(result);
    const retorno = key.filter((curr) => curr !== 'USDT');
    dispatch(setCurrency(retorno));
  } catch (error) {
    console.log(error);
  }
};

export const setPrices = (expenses) => ({
  type: SET_PRICES,
  payload: expenses,
});

export const setExpenses = (expense) => ({
  type: GET_EXPENSES,
  payload: expense,
});

export const fetchPrice = (expense) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const expensesAndRates = { ...expense, exchangeRates: { ...result } };
    dispatch(setExpenses(expensesAndRates));
  } catch (error) {
    console.log(error);
  }
};

export const deleteButton = (expenseId) => ({
  type: DELETE_EXPENSE,
  payload: expenseId,
});

export const editButton = (expenseId) => ({
  type: EDIT_EXPENSE,
  payload: expenseId,
});

export const editedInfos = (obj) => ({
  type: UPDATE_EXPENSE,
  payload: obj,
});
