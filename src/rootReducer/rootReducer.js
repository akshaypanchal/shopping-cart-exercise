import axios from 'axios';


const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const REMOVE_SELECTED_PRODUCT_FROM_CART = "REMOVE_SELECTED_PRODUCT_FROM_CART";
const TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART = "TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART";
const FETCH_PRODUCTS_FROM_DATABASE = "FETCH_PRODUCTS_FROM_DATABASE";
const UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA = "UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA";
const UPDATE_CART_AFTER_USER_PLACR_ORDER = "UPDATE_CART_AFTER_USER_PLACR_ORDER";

const defaultState1 = {
    productArray: [],
    selectedDataForCart: [],
    totalAmount: 0

}


const rootReducer = (state = defaultState1, action) => {
    let newState = { ...state }

    switch (action.type) {

        case FETCH_PRODUCTS_FROM_DATABASE:
            console.log("FETCH_PRODUCTS_FROM_DATABASE");
            return {
                ...newState,
                productArray: action.data
            }

        case UPDATE_CART_AFTER_USER_PLACR_ORDER:
            return{
                ...newState,
                selectedDataForCart:[]
            }


        case UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA:

            const newProductArray = newState.productArray;
            if (action.data) {
                for (var i = 0; i < newProductArray.length; i++) {
                    if (newProductArray[i]._id === action.data._id) {
                        if(newProductArray[i].isInCart === true){
                            newProductArray[i].isInCart = false;
                        }
                        else{
                            newProductArray[i].isInCart = true;
                        }
                    }
                }
            }

            else {

                if (newState.selectedDataForCart.length > 0) {
                    for ( i = 0; i < newState.selectedDataForCart.length; i++) {
                        for (var j = 0; j < newProductArray.length; j++) {
                            if (newState.selectedDataForCart[i]._id === newProductArray[j]._id) {
                                console.log(newProductArray[j]);
                                if (newProductArray[j].isInCart === true) {
                                    console.log("false edition edition", newProductArray[j].isInCart);
                                    newProductArray[j].isInCart = false;
                                    console.log("false edition edition", newProductArray[j].isInCart);
                                }
                                else {

                                    newProductArray[j].isInCart = true;
                                    console.log("true edition", newProductArray[j].isInCart);
                                }
                            }
                        }
                    }
                }
            }
            const products = [...newProductArray];

            console.log("new Product Array", newProductArray);
            return {

                ...newState,
                productArray: products
            }

        case PASS_DATA_TO_CART:
            console.log("PASS_DATA_TO_CART")

            axios.post("http://localhost:3000/wishlist", action.data)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                })

            let newArray = [...newState.selectedDataForCart, action.data]
            let selectedPrice = parseInt(action.data.price);
            let newTotal = newState.totalAmount + selectedPrice;
            return {
                ...newState,
                selectedDataForCart: newArray,
                totalAmount: newTotal
            }

        case TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART:
            console.log("TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART")
            let removedPrice = parseInt(action.data.price);
            let total = newState.totalAmount - removedPrice;
            return {
                ...newState,
                totalAmount: total
            }

        case REMOVE_SELECTED_PRODUCT_FROM_CART:
            console.log("REMOVE_SELECTED_PRODUCT_FROM_CART")
            let itemValue = action.data;
            const array1 = newState.selectedDataForCart.filter(item => item.index !== itemValue.index);

            axios.delete(`http://localhost:3000/wishlist?_id=${itemValue._id}`)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                })


            return {
                ...newState,
                selectedDataForCart: array1
            };


        default: return newState;

    }

}

export default rootReducer;