export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = ({ id, quantity }) => ({
  type: ADD_TO_CART,
  id,
  quantity,
});
