import React from 'react';
import {useDispatch} from 'react-redux';
import {removeSelectedProductFromCart, totalAmountAfterRemoveProductFromCart} from '../../actions/action';


const CartItem = ({ name, price, currency, index}) => {

    const dispatch = useDispatch();

    const removeSelectedItemFromCart = (data) =>{
        dispatch(removeSelectedProductFromCart({data}));
        dispatch(totalAmountAfterRemoveProductFromCart({data}))
    }


    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={()=>removeSelectedItemFromCart({name,price, index})}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}


export default CartItem;
