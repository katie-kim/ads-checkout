import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import {
  productsInCartSelector,
  totalSelector,
} from '../../redux/selectors';

const Cart = () => {
  const addedProducts = useSelector(productsInCartSelector);
  const total = useSelector(totalSelector);

  return (
    <div className="cart">
      <h2>Review items</h2>
      <ul className="cart-products">
        {addedProducts.map(product => (
          <li key={product.id}>
            <CartProduct {...product} />
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <div className="cart-summary__item">
          <h3 className="cart-summary__item-label">Total</h3>
          <div className="cart-summary__item-value">${total}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;