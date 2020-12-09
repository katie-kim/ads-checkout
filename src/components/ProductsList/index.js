import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/actions';
import { getProductsList, getIsLoading, getToken } from '../../redux/selectors';
import Product from '../Product';
import LoadingSpinner from '../LoadingSpinner';

function ProductsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const productsList = useSelector(getProductsList);
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, token]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="products-list">
      <h2>Products List</h2>
      <ul>
        {productsList.map(({name, id, unitPrice, promo}) => (
          <li key={id}><Product id={id} name={name} unitPrice={unitPrice} promo={promo} /></li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
