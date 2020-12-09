import React from 'react';
import PropTypes from 'prop-types';
import { multiply } from '../../utils';

const CartProduct = ({ name, quantity, unitPrice, discountedPrice }) => {
  return (
    <div className="cart-product">
      <div className="cart-product__quantity">{quantity} <span aria-hidden="true">X</span></div>
      <h3 className="cart-product__name">{name}</h3>
      <div>
        {discountedPrice && (
          <div className="product__price--discounted">${discountedPrice}</div>
        )}
        <div className={`product__price${discountedPrice ? ' product__price--promo-applied' : ''}`}>
          ${multiply(unitPrice, quantity)}
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
};

export default CartProduct;