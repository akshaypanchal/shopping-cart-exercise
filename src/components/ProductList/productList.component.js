import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../Products/products.component';
import './productlist.style.css';
import axios from 'axios';
import {addDataToCart, fetchProductsFromDatabase, updateProductArrayWithUserWishList} from '../../actions/action';



const ProductList = () => {

  const items = useSelector(state => state.selectedDataForCart);
  const productData = useSelector(state => state.productArray);
  console.log("productData", productData);

  // const [productData, setProductData] = useState([])
    const dispatch = useDispatch();

  useEffect(() => {

    console.log("product list called");
    // axios.get("http://localhost:3000/")
    // .then(function (response) {
    //   // setProductData(response.data.data);
    //   // console.log("response");
    //   // console.log(response)
    //   dispatch(fetchProductsFromDatabase(response.data.data));
    // })


    axios.get("http://localhost:3000/wishlist")
    .then(function(response){
        // console.log(response)

        response.data.data.map(item=>{
            console.log("response called");
            dispatch(addDataToCart(item));
            dispatch(updateProductArrayWithUserWishList());
        })

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