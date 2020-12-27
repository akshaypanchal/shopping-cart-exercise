import axios from 'axios';

const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const REMOVE_SELECTED_PRODUCT_FROM_CART = "REMOVE_SELECTED_PRODUCT_FROM_CART";
const TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART = "TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART";
const FETCH_PRODUCTS_FROM_DATABASE  = "FETCH_PRODUCTS_FROM_DATABASE";
const UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA   = "UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA";

const defaultState1 = {
    productArray:[],
    selectedDataForCart: [],
    totalAmount: 0

}


const rootReducer = (state = defaultState1, action) => {
    let newState = { ...state }

    switch (action.type) {

        case FETCH_PRODUCTS_FROM_DATABASE:
            console.log("FETCH_PRODUCTS_FROM_DATABASE")
            return {
                ...newState,
                productArray:action.data
            }

        case UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA:

        console.log("UPDATE_PRODUCT_ARRAY_WITH_USER_WISHLIST_DATA")

            const newProductArray = newState.productArray;
            if(newState.selectedDataForCart.length>0){
                for(var i=0;i<newState.selectedDataForCart.length;i++){
                    for(var j=0; j<newProductArray.length; j++){
                        if(newState.selectedDataForCart[i]._id === newProductArray[j]._id){
                            // newProductArray[j].isInCart = true;
                            if(newProductArray[j].isInCart){
                                newProductArray[j].isInCart = false;
                            }
                            else{
                                console.log("remove button should display");
                                newProductArray[j].isInCart = true;
                            }
                        }
                    }
                }
            }

            // console.log("new Product Array", newProductArray);
            return {
                ...newState,
                productArray: newProductArray
            }

        case PASS_DATA_TO_CART:
            console.log("PASS_DATA_TO_CART")

                axios.post("http://localhost:3000/wishlist",action.data)
                    .then(function (response) {
                        // console.log(response)
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
                    // console.log(response);
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