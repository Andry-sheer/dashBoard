
import { GET_PRODUCTS, SET_IS_ERROR } from "../actionTypes"

export const addProducts = productsData => ({
    type: GET_PRODUCTS,
    payload: {
      productsData,
    }
})

export const setIsError = isError => ({
  type: SET_IS_ERROR,
  payload: {
    isError
  }
})