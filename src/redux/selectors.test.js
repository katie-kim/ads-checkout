import { productsInCartSelector, totalSelector } from './selectors';

describe('productsInCartSelector', () => {
  test('selects an array of products added in cart', () => {
    const addedProductsIds = ['classic', 'premium'];
    const quantityById = {
      classic: 4,
      premium: 3,
    };
    const productsList = [
      {
        id: 'classic',
        name: 'Classic Ad',
        unitPrice: 269.99,
        promo: {},
      }, {
        id: 'standOut',
        name: 'Stand out Ad',
        unitPrice: 322.99,
        promo: {},
      }, {
        id: 'premium',
        name: 'Premium Ad',
        unitPrice: 394.99,
        promo: {
          discountedUnitPrice: 389.99,
        },
      },
    ];

    const [ classic, premium] = productsInCartSelector.resultFunc(addedProductsIds, quantityById, productsList);

    expect(classic.name).toEqual('Classic Ad');
    expect(classic.quantity).toEqual(4);
    expect(classic.discountedPrice).toEqual(null);

    expect(premium.name).toEqual('Premium Ad');
    expect(premium.quantity).toEqual(3);
    expect(premium.discountedPrice).toEqual(1169.97);
  });
});

describe('totalSelector', () => {
  test('calculates total correctly', () => {
    const productsInCartDefault = [{
      id: 'standOut',
      name: 'Stand out Ad',
      unitPrice: 322.99,
      quantity: 5,
      discountedPrice: null,
    }, {
      id: 'premium',
      name: 'Premium Ad',
      unitPrice: 394.99,
      quantity: 5,
      discountedPrice: null,
    }];
    const actual = totalSelector.resultFunc(productsInCartDefault);

    expect(actual).toEqual(3589.9);
  });

  test('calculates total correctly with discounted Price', () => {
    const productsInCartMyer = [{
      id: 'standOut',
      name: 'Stand out Ad',
      unitPrice: 322.99,
      quantity: 5,
      discountedPrice: 1291.96,
    }, {
      id: 'premium',
      name: 'Premium Ad',
      unitPrice: 394.99,
      quantity: 5,
      discountedPrice: 1449.95,
    }];
    const actual = totalSelector.resultFunc(productsInCartMyer);

    expect(actual).toEqual(2741.91);
  });
});

