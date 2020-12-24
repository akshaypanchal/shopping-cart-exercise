import './product.style.css';
import {addDataToCart, removeSelectedProductFromCart, totalAmountAfterRemoveProductFromCart} from '../../actions/action';
import {useDispatch} from 'react-redux';
import { useState } from 'react';



const Product = ({name, price, currency, image, index, no_of_items}) =>{

    const dispatch = useDispatch();
    
    const [isInCart, isInCartSelected]  = useState(false);

    const passDataToCart = (data) =>{

        if(isInCart){
            dispatch(removeSelectedProductFromCart({data}));
            dispatch(totalAmountAfterRemoveProductFromCart({data}));
            isInCartSelected(false);
        }
        else{
            dispatch(addDataToCart({data}));
            isInCartSelected(true);
        
        }
    }



    return(
        <div className="product thumbnail">
        <img src={image} alt="product" />
        <div className="caption">
            <h3>{name}</h3>
            <div className="product__price">{price} {currency}</div>
            <div className="product__button-wrap">
                    <button
                    className={isInCart ? 'btn btn-danger' : 'btn btn-primary'} //add condition
                    onClick = {()=>passDataToCart({name,price,currency, index})}
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