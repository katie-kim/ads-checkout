import { combineReducers } from 'redux';
import authReducer from '../components/Login/redux/reducers';
import productsReducer from '../components/ProductsList/redux/reducers';
import cartReducer from '../components/Cart/redux/reducers';

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
});
