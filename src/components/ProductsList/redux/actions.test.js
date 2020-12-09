import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {
  FETCH_PRODUCTS_SUCCESS,
  fetchProducts
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async actions', () => {
  test('creates FETCH_PRODUCTS_SUCCESS when fetching products and pricing rules is successful', () => {

    const store = mockStore({
      auth: {},
      products: {},
      cart: {},
    });

    return store.dispatch(fetchProducts())
      .then(() => {
        const actions = store.getActions()
        expect(actions[1].type).toEqual(FETCH_PRODUCTS_SUCCESS)
      }
    );
  });
});
