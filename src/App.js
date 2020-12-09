import './styles/app.scss';
import Login from './components/Login'
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';


function App() {
  return (
    <div className="ads-checkout">
      <h1>Ads Checkout</h1>
      <Login />
      <ProductsList />
      <Cart />
    </div>
  );
}

export default App;
