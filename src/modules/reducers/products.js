

import { DELETE_PRODUCT, FETCH_PRODUCTS } from "../actionTypes"

const initialState = {
    productsData: [],
    isLoadProducts: false,
};

const products = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS: {
          const { productsData } = action.payload;
          return { ...state, productsData, isLoadProducts: true, };
        }

        case DELETE_PRODUCT: {
          return {
            ...state, 
            isLoadProducts: false
          }
        }

        default:
          return state;
    }
}

export default products;