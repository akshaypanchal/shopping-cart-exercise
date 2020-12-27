import './product.style.css';
import {addDataToCart, removeSelectedProductFromCart, totalAmountAfterRemoveProductFromCart, updateProductArrayWithUserWishList} from '../../actions/action';
import {useDispatch, useSelector} from 'react-redux';



const Product = ({_id,name, price, currency, image, index, no_of_items, isInCart}) =>{

    console.log("product rendered");
    const dispatch = useDispatch();

    const passDataToCart = (data) =>{

        if(isInCart){
            dispatch(removeSelectedProductFromCart(data));
            dispatch(totalAmountAfterRemoveProductFromCart(data));
            // isInCartSelected(false);
            dispatch(updateProductArrayWithUserWishList());

        }
        else{
            dispatch(addDataToCart(data));
            // isInCartSelected(true);
            dispatch(updateProductArrayWithUserWishList());
        
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
                    onClick = {()=>passDataToCart({_id,name,price,currency, index, no_of_items, isInCart})}
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