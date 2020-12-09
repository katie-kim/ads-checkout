import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/redux/actions';

const MIN_QUANTITY_TO_ADD = 1;

const Product = ({ id, name, unitPrice, promo }) => {
  const [quantity, setQuantity] = useState(MIN_QUANTITY_TO_ADD);
  const dispatch = useDispatch();
  
  const { discountedUnitPrice, description } = promo;

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (quantity < MIN_QUANTITY_TO_ADD) return;
  
    dispatch(addToCart({ id, quantity }));
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <div className="product__promo-description">{description}</div>
      <div>
        <span>Price: </span>
        <span className={`product__price${discountedUnitPrice ? ' product__price--promo-applied' : ''}`}>
          ${unitPrice}
        </span>
        {discountedUnitPrice && (
          <span className="product__price--discounted">${discountedUnitPrice}</span>
        )}
      </div>
      <label htmlFor={`${id}-quantity`}>
        Quantity to add:
        <input
          id={`${id}-quantity`}
          className="product__quantity-input"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={MIN_QUANTITY_TO_ADD}
        />
      </label>
      <button className="product__add-button" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  promo: PropTypes.shape({
    description: PropTypes.string,
    discountedUnitPrice: PropTypes.number
  }),
};

export default Product;