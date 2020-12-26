import ProductList from './components/ProductList/productList.component'
import Cart from './components/Cart/cart.component';
import './App.css';
import React from 'react';



function App() {


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
