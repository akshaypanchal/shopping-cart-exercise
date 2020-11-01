import data from "../data/products";

const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const SELECTED_PRODUCTS_TOTAL_PRICE= "SELECTED_PRODUCTS_TOTAL_PRICE";
const REMOVE_SELECTED_PRODUCT_FROM_CART = "REMOVE_SELECTED_PRODUCT_FROM_CART";
const TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART = "TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART";

export const addDataToCart = (data) =>{
    return{
        type: PASS_DATA_TO_CART,
        data:data
    }
}

export const selectedProductsTotal = (data)=>{
    return{
        type:SELECTED_PRODUCTS_TOTAL_PRICE,
        data:data
    }
}

export const removeSelectedProductFromCart = (data) =>{
    return{

        type:REMOVE_SELECTED_PRODUCT_FROM_CART,
        data:data
    }
}

export const totalAmountAfterRemoveProductFromCart = (data) =>{
    return{

        type:TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART,
        data:data
    }
}