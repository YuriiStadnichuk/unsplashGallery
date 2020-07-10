import * as types from './types';
import groceryApi from 'api';

const startLoading = {
  type: types.SET_LOADING,
  payload: true,
};

const finishLoading = {
  type: types.SET_LOADING,
  payload: false,
};

export const fetchAdListProducts = () => async dispatch => {
  try {
    dispatch(startLoading);
    
    // console.log('groceryApi');
    // console.dir(groceryApi);

    const response = await groceryApi.get('list-products');
    dispatch({
      type: types.FILL_LISTOFFERS,
      payload: response.data.data.offerimages,
    });
  } catch(e) {
    // console.log(e);
  } finally {
    dispatch(finishLoading);
  }
};


