

import { GET_PRODUCTS } from "../actionTypes"

const initialState = {
    productsData: [],
    isLoading: true,
};

const products = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS: {
          const { productsData } = action.payload;
          return { ...state, productsData }; //{ ...state, data: data };
        }
        default:
          return state;
    }
}

export default products;