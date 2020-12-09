import reducer from './reducers'
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from './actions';

describe('products reducer', () => {
  const initialState = {
    isLoading: false,
    productsList: [],
    hasError: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_PRODUCTS_REQUEST', () => {
    expect(
      reducer(initialState, { type: FETCH_PRODUCTS_REQUEST })
    ).toEqual({
      isLoading: true,
      productsList: [],
      hasError: false,
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(
      reducer({
        isLoading: true,
        productsList: [],
        hasError: false,
      }, {
        type: FETCH_PRODUCTS_SUCCESS,
        products: [
          {
            id: 'classic',
            name: 'Classic Ad',
            unitPrice: 269.99,
          }, {
            id: 'standOut',
            name: 'Stand out Ad',
            unitPrice: 322.99,
          }, {
            id: 'premium',
            name: 'Premium Ad',
            unitPrice: 394.99,
          },
        ],
        promos: {
          classic: {
            description: '3 for 2 deal',
            deal: {
              buy: 3,
              for: 2,
            },
          },
        },
      })
    ).toEqual({
      isLoading: false,
      productsList: [
        {
          id: 'classic',
          name: 'Classic Ad',
          unitPrice: 269.99,
          promo: {
            description: '3 for 2 deal',
            deal: {
              buy: 3,
              for: 2,
            },
          }
        }, {
          id: 'standOut',
          name: 'Stand out Ad',
          unitPrice: 322.99,
          promo: {},
        }, {
          id: 'premium',
          name: 'Premium Ad',
          unitPrice: 394.99,
          promo: {},
        },
      ],
      hasError: false,
    });
  });
});
