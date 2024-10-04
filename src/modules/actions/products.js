import { API_URL } from "../../constants/constants";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "../actionTypes";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const productsData = await response.json();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        productsData,
      }
    })
  } catch (error) {
    console.log("Error", error);
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_PRODUCT,
    })
  } catch (error) {
    console.log("Error", error);
  }
}


