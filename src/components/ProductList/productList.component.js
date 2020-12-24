import React, { useEffect, useState } from 'react';
import Product from '../Products/products.component';
import './productlist.style.css';
import axios from 'axios';

const ProductList = () => {

  const [productData, setProductData] = useState([])



  useEffect(() => {
    axios.get("http://localhost:3000/")
    .then(function (response) {
      setProductData(response.data.data);
    })


  }, [])




  return (
    <div>
      <h3>Products</h3>
      <ul className="product-list">
        {productData.map((product, index) => (
          <li key={product.id} className="product-list__item">
            <Product {...product} index={index} />
          </li>
        ))}
      </ul>
    </div>

  );
}

export default ProductList;