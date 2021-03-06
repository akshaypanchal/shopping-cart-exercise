import React from 'react';
import CartItem from './CartItem';
import './cart.style.css';
import {useSelector} from 'react-redux';

const Cart = () => {


    const items = useSelector(state => state.selectedDataForCart)
    const total = useSelector(state=>state.totalAmount);
    

    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        { items && items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.name+item.price} {...item}  />
                                ))}
                            </div>
                        )}
                        <div className="cart__total">Total: {total} EUR</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
