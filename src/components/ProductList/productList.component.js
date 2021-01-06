import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../Products/products.component';
import './productlist.style.css';
import axios from 'axios';
import {addDataToCart,  updateProductArrayWithUserWishList} from '../../actions/action';



const ProductList = () => {

  const productData = useSelector(state => state.productArray);
  console.log("productData", productData);

    const dispatch = useDispatch();

  useEffect(() => {

    axios.get("http://localhost:3000/wishlist")
    .then(function(response){

        response.data.data.map(item=>{
            console.log(response);
            dispatch(addDataToCart(item));
           
        })
        dispatch(updateProductArrayWithUserWishList());
    })
    .catch(function(error){
        console.log(error);
    })





  }, [])




  return (
    <div>
      <h3>Products</h3>
      <ul className="product-list">
        {productData.map((product, index) => (
          <li key={product._id} className="product-list__item">
            <Product {...product} index={index} />
          </li>
        ))}
      </ul>
    </div>

  );
}

export default ProductList;