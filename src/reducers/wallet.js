import { SET_CURRENCY_LIST, GET_EXPENSES,
  DELETE_EXPENSE, EDIT_EXPENSE, UPDATE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  const newExpense = [...state.expenses];
  switch (action.type) {
  case SET_CURRENCY_LIST:
    return { ...state, currencies: action.payload };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload) };
  case EDIT_EXPENSE:
    return { ...state, edit: action.payload };
  case UPDATE_EXPENSE:
    newExpense[state.edit] = action.payload;
    return { ...state, expenses: newExpense, edit: '' };
  default:
    return state;
  }
};

export default walletReducer;
