import reducer from './reducers'
import { ADD_TO_CART } from './actions';

describe('cart reducer', () => {
  const initialState = {
    addedProductsIds: [],
    quantityById: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TO_CART', () => {
    const action = {
      type: ADD_TO_CART,
      id: 'premium',
      quantity: 3,
    };

    expect(
      reducer(initialState, action)
    ).toEqual({
      addedProductsIds: ['premium'],
      quantityById: { premium : 3 },
    });

    expect(
      reducer({
        addedProductsIds: ['premium', 'standard'],
        quantityById: { premium : 1, standard: 2 },
      }, action)
    ).toEqual({
      addedProductsIds: ['premium', 'standard'],
      quantityById: { premium : 4, standard: 2 },
    });
  });
});
