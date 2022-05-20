import { SET_CURRENCY_LIST, GET_EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCY_LIST:
    return { ...state, currencies: action.payload };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload) };
  default:
    return state;
  }
};

export default walletReducer;
