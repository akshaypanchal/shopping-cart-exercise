const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const SELECTED_PRODUCTS_TOTAL_PRICE= "SELECTED_PRODUCTS_TOTAL_PRICE";
const REMOVE_SELECTED_PRODUCT_FROM_CART = "REMOVE_SELECTED_PRODUCT_FROM_CART";
const TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART = "TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART";
const FETCH_PRODUCTS_FROM_DATABASE = "FETCH_PRODUCTS_FROM_DATABASE";
const UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA = "UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA";
const UPDATE_CART_AFTER_USER_PLACR_ORDER = "UPDATE_CART_AFTER_USER_PLACR_ORDER";
 

export const updateCartAfterUserPLaceOrder = () => {
    return{
        type: UPDATE_CART_AFTER_USER_PLACR_ORDER
    }
}


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

export const fetchProductsFromDatabase = (data) => {
    return{
        type: FETCH_PRODUCTS_FROM_DATABASE,
        data:data
    }
}

export const updateProductArrayWithUserWishList = (data) =>{
    return {
        type: UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA,
        data:data
    }
}