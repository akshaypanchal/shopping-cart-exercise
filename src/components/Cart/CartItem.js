import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeSelectedProductFromCart, totalAmountAfterRemoveProductFromCart } from '../../actions/action';
import axios from 'axios';

const CartItem = ({_id, name, price, currency, index }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.post("http://localhost:3000/wishlist", {_id, name, price, currency, index })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    const removeSelectedItemFromCart = (data) => {
        dispatch(removeSelectedProductFromCart({ data }));
        dispatch(totalAmountAfterRemoveProductFromCart({ data }));

        axios.delete(`http://localhost:3000/wishlist?_id=${_id}`)
        .then(function(response){
            console.log(response);
        })
        .catch(function(response){
            console.log(response);
        })


    }


    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={() => removeSelectedItemFromCart({ name, price, index })}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}


export default CartItem;
