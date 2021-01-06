import ProductList from './components/ProductList/productList.component'
import Cart from './components/Cart/cart.component';
import './App.css';
import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { fetchProductsFromDatabase } from './actions/action';
import { useDispatch } from 'react-redux';
import  SignUp from './components/sign-up/signUp.component';
import Login from './components/login/login.component';


function App() {
  const dispatch = useDispatch();

  axios.get("http://localhost:3000/")
    .then(function (response) {

      dispatch(fetchProductsFromDatabase(response.data.data));
    })

  return (

    <div>

      <Switch>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

        <Route path="/shopping">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1> Shopping Cart Example</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <ProductList />
            </div>
            <div className="col-md-4">
              <Cart />
            </div>
          </div>

        </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
