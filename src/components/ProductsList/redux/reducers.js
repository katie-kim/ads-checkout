import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './actions';

const initialState = {
  isLoading: false,
  productsList: [],
  hasError: false,
};

export default (state = initialState, action) => {
  switch (action.type){
  case FETCH_PRODUCTS_REQUEST: {
    return {
      ...state,
      isLoading: true,
    };
  }
  case FETCH_PRODUCTS_SUCCESS: {
    return {
      ...state,
      isLoading: false,
      productsList: action.products.map(product => {
        const promo = action.promos[product.id] || {};

        return { ...product, promo };
      }),
      hasError: false,
    };
  }
  case FETCH_PRODUCTS_FAILURE:
    return {
      ...state,
      isLoading: false,
      hasError: true,
    };
  default:
    return state;
  }
};