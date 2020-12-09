import { fetchProductsFromBackend, fetchPricingRulesFromBackend } from '../../../apis';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products, promos) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
  promos,
});

const fetchProductsFailure = () => ({
  type: FETCH_PRODUCTS_FAILURE,
});

export const fetchProducts = () => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch(fetchProductsRequest());
  return Promise.all([fetchProductsFromBackend(), fetchPricingRulesFromBackend(token)])
    .then((response) => {
      const [productsList, promos] = response;
      if (productsList && promos) {
        dispatch(fetchProductsSuccess(productsList, promos));
      } else {
        dispatch(fetchProductsFailure());
      }
    }).catch(() => {
      dispatch(fetchProductsFailure());
    });
};