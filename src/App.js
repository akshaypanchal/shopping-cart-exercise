import ProductList from './components/ProductList/productList.component'
import Cart from './components/Cart/cart.component';
import './App.css';
import React from 'react';
import axios from 'axios';

import {fetchProductsFromDatabase} from './actions/action';
import { useDispatch } from 'react-redux';



function App() {
const dispatch = useDispatch();

    axios.get("http://localhost:3000/")
    .then(function (response) {
      // setProductData(response.data.data);
      // console.log("response");
      // console.log(response)
      dispatch(fetchProductsFromDatabase(response.data.data));
    })

  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <h1> Shopping Cart Example</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <ProductList/>
        </div>
        <div className="col-md-4">
            <Cart />
        </div>
    </div>

</div>
  );
}

export default App;
