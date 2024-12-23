import { API_URL } from "../../constants/constants";
import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  CHANGE_CATEGORY,
  CHANGE_DESCRIPTIONS,
  CHANGE_NAME,
  CHANGE_PRICE,
  CHANGE_QUANTITY,
  CHANGE_IMAGE,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  SET_IS_LOADING,
  SET_EDIT,
  SET_RESET,
} from "../actionTypes";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: SET_IS_LOADING,
  });

  try {
    const response = await fetch(`${API_URL}/products`);
    const productsData = await response.json();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        productsData,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const resetForm = ()=> ({
  type: SET_RESET,
});

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_PRODUCT,
    });
  } catch (error) {
    console.log("Error Delete product", error);
  }
};

export const addProducts = (category, name, price, quantity, descriptions, image) => async (dispatch, getState) => {

  try {
    await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        category,
        name,
        price,
        quantity,
        descriptions,
        image,
      ),
    });

    dispatch({
      type: ADD_PRODUCT,
    });
  } catch (error) {
    console.log("Error ADD product...", error);
  }
};

export const editId = (editId, editCategory, editName, editQuantity, editPrice, editDescriptions, editImage ) => ({
  type: SET_EDIT,
  payload: {
    editId,
    editCategory,
    editName,
    editQuantity,
    editPrice,
    editDescriptions,
    editImage,
  }
})

export const editProducts = (category, name, price, quantity, descriptions, image ) => async (dispatch, getState) => {
  const { products } = getState();

  try {
    await fetch(`${API_URL}/products/${products.editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        category,
        name,
        price,
        quantity,
        descriptions,
        image,
    ),
    });

    dispatch({
      type: EDIT_PRODUCT,
    });
  } catch (error) {
    console.log("Error EDIT product...", error);
  }
}

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: {
    name,
  },
});

export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  payload: {
    category,
  },
});

export const changeDescriptions = (descriptions) => ({
  type: CHANGE_DESCRIPTIONS,
  payload: {
    descriptions,
  },
});

export const changePrice = (price) => ({
  type: CHANGE_PRICE,
  payload: {
    price,
  },
});

export const changeQuantity = (quantity) => ({
  type: CHANGE_QUANTITY,
  payload: {
    quantity,
  },
});

export const changeImage = (image) => ({
  type: CHANGE_IMAGE,
  payload: {
    image,
  }
});