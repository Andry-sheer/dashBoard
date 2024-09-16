
import { GET_PRODUCTS } from "../actionTypes"

export const addProducts = productsData => ({
    type: GET_PRODUCTS,
    payload: {
      productsData,
    }
})
