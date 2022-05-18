export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_CURRENCY_LIST = 'SET_CURRENCY_LIST';

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
    dispatch(setCurrency(result));
  } catch (error) {
    console.log(error);
  }
};
