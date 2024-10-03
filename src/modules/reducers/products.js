

import { GET_PRODUCTS } from "../actionTypes"

const initialState = {
    productsData: [],
};

const products = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS: {
          const { productsData } = action.payload;
          return { ...state, productsData };
        }

        default:
          return state;
    }
}

export default products;