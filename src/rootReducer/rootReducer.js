import axios from 'axios';

const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const REMOVE_SELECTED_PRODUCT_FROM_CART = "REMOVE_SELECTED_PRODUCT_FROM_CART";
const TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART = "TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART";
const UPDATE_STATE_FOR_LATEST_DATA = "UPDATE_STATE_FOR_LATEST_DATA";

const defaultState1 = {

    selectedDataForCart: [],
    totalAmount: 0

}


const rootReducer = (state = defaultState1, action) => {
    let newState = { ...state }

    switch (action.type) {

        case UPDATE_STATE_FOR_LATEST_DATA:
            return {
                totalAmount: 0,
                selectedDataForCart: []
            }

        case PASS_DATA_TO_CART:

                axios.post("http://localhost:3000/wishlist",action.data)
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
            let removedPrice = parseInt(action.data.price);
            let total = newState.totalAmount - removedPrice;
            return {
                ...newState,
                totalAmount: total
            }

        case REMOVE_SELECTED_PRODUCT_FROM_CART:
            let itemValue = action.data;
            const array1 = newState.selectedDataForCart.filter(item => item.index !== itemValue.index);
            console.log(itemValue._id);

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