import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogin} from './redux/actions';

function Login() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(userLogin(e.target.value));
  }

  return (
    <div className="login">
      <label htmlFor="login-as">Log in as </label>
      <select id="login-as" onChange={handleChange}>
        <option value=''>Default</option>
        <option value='myer'>Myer</option>
        <option value='secondBite'>SecondBite</option>
        <option value='axilCoffee'>Axil Coffee Roasters</option>
      </select>
    </div>
  );
}

export default Login;
