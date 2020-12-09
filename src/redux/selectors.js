
import { createSelector } from 'reselect';
import { roundDownTwoDecimal, getDiscountedPrice } from '../utils';

const getAddedProductsIds = state => state.cart.addedProductsIds;
const getQuantityById = state => state.cart.quantityById;

export const getProductsList = state => state.products.productsList;
export const getIsLoading = state => state.products.isLoading;
export const getToken = state => state.auth.token;

export const productsInCartSelector = createSelector(
  [getAddedProductsIds, getQuantityById, getProductsList],
  (addedProductsIds, quantityById, productsList) => (
    addedProductsIds.map(productId => {
      const { promo, ...product } = productsList.find(product => product.id === productId);
      const { unitPrice } = product;
      const quantity = quantityById[productId] || 0;

      return {
        ...product,
        quantity,
        discountedPrice: getDiscountedPrice(promo, quantity, unitPrice),
      };
    })
));

export const totalSelector = createSelector(
  productsInCartSelector,
  (productsInCart => (
    roundDownTwoDecimal(productsInCart.reduce((acc, item) => {
      return acc + (item.discountedPrice || (item.unitPrice * item.quantity));
    }, 0))
  ))
);
