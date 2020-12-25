import './product.style.css';
import {addDataToCart, removeSelectedProductFromCart, totalAmountAfterRemoveProductFromCart} from '../../actions/action';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import axios from 'axios';


const Product = ({_id,name, price, currency, image, index, no_of_items}) =>{

    const dispatch = useDispatch();
    
    const [isInCart, isInCartSelected]  = useState(false);

    const passDataToCart = (data) =>{

        if(isInCart){
            dispatch(removeSelectedProductFromCart({data}));
            dispatch(totalAmountAfterRemoveProductFromCart({data}));
            isInCartSelected(false);

            // axios.post("http://localhost:3000/addProduct", {data})
            // .then(function(response){
            //     console.log(response)
            // })
            // .catch(function(error){
            //     console.log(error);
            // })

        }
        else{
            dispatch(addDataToCart({data}));
            isInCartSelected(true);
        
        }
    }



    return(
        <div className="product thumbnail">
        <img className="image" src={image} alt="product" />
        <div className="caption">
            <h3>{name}</h3>
            <div className="product__price">{price} {currency} Qty: {no_of_items}</div>
            <div className="product__button-wrap">
                    <button
                    className={isInCart ? 'btn btn-danger' : 'btn btn-primary'} //add condition
                    onClick = {()=>passDataToCart({_id,name,price,currency, index, no_of_items})}
                    disabled= {no_of_items <= 0 ?true:false}
                    >
                        
                    {no_of_items<=0 ? "Out of Stock": (isInCart ?  "Remove" : "Add to Cart")}
                </button>

            </div>
        </div>
    </div>
    );
}

export default Product;