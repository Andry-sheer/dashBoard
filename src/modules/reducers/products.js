

import { DELETE_PRODUCT, FETCH_PRODUCTS, SET_IS_LOADING } from "../actionTypes"

const initialState = {
    productsData: [],
    isLoadProducts: false,
    isLoading: false
};

const products = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS: {
          const { productsData } = action.payload;
          return { ...state, productsData, isLoadProducts: true, isLoading: false };
        }

        case DELETE_PRODUCT: {
          return {
            ...state, 
            isLoadProducts: false,
            // isLoading: false
          }
        }

        case SET_IS_LOADING: {
          return {
            ...state, isLoading: true,
          }
        }

        default:
          return state;
    }
}

export default products;