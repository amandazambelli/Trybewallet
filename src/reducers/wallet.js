const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCY':
    return { ...state, currencies: action.payload };
  case 'GET_EXPENSES':
    return { ...state, expenses: action.payload };

  default:
    return state;
  }
};

export default walletReducer;
