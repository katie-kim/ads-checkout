import configureStore from 'redux-mock-store';
import {
  ADD_TO_CART,
  addToCart
} from './actions';

const mockStore = configureStore();

test('should dispatch action', () => {
  const store = mockStore({
    auth: {},
    products: {},
    cart: {},
  });

  store.dispatch(addToCart({
    id: 'premium',
    quantity: 3,
  }));

  const actions = store.getActions()
  expect(actions).toEqual([{
    type: ADD_TO_CART,
    id: 'premium',
    quantity: 3,
  }]);
});
