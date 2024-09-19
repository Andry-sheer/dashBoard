

import { GET_PRODUCTS, SET_IS_ERROR } from "../actionTypes"

const initialState = {
    productsData: [],
    isError: false,
};

const products = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS: {
          const { productsData } = action.payload;
          return { ...state, productsData }; //{ ...state, data: data };
        }
        case SET_IS_ERROR: {
          const { isError } = action.payload;
          return { ...state, isError };
        }
        default:
          return state;
    }
}

export default products;