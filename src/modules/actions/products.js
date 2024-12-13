import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  FILL_FORM,
  UPD_FORM,
  SET_IS_LOADING,
  RESET_FORM,
  IS_ERROR,
} from "../actionTypes";

import { API_URL } from "../../constants/constants";

export const fetchProducts = ()=> async(dispatch)=> {
  dispatch({ type: SET_IS_LOADING, payload: true });

  try {
    const res = await fetch(`${API_URL}/products`);
    const productsData = await res.json();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        productsData
      },
    });

  } catch (error) {
    console.error("Error FETCH products", error);
    dispatch({ type: IS_ERROR, payload: true });
  }

  finally {
    dispatch({ type: SET_IS_LOADING, payload: false})
  }
};

export const addProduct = ()=> async(dispatch, getState)=> {
  const { form } = getState().products;
  dispatch({ type: SET_IS_LOADING, payload: true });

  try {
    const res = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const newProduct = await res.json();

    dispatch({
      type: ADD_PRODUCT,
      payload: newProduct
    });

    dispatch(resetForm());

  } catch (error) {
    console.log("Error ADD product", error);
  }

  finally {
    dispatch({ type: SET_IS_LOADING, payload: false})
  }
};

export const editProduct = ()=> async(dispatch, getState)=> {
  const { form } = getState().products;
  dispatch({ type: SET_IS_LOADING, payload: true });

  try {
    const res = await fetch(`${API_URL}/products/${form.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const updateProduct = await res.json();

    dispatch({
      type: EDIT_PRODUCT,
      payload: updateProduct
    });
    dispatch(resetForm());

  } catch (error) {
    console.log("Error EDIT product", error);
  }

  finally {
    dispatch({ type: SET_IS_LOADING, payload: false})
  }
};

export const deleteProduct = (id)=> async(dispatch)=> {
  dispatch({ type: SET_IS_LOADING, payload: true });

  try {
    await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });

  } catch (error) {
    console.log("Error DELETE product", error);
  }

  finally {
    dispatch({ type: SET_IS_LOADING, payload: false})
  }
};

export const fillForm = (product) => ({
  type: FILL_FORM,
  payload: product
});

export const updateForm = (name, value) => ({
  type: UPD_FORM,
  payload: { name, value }
});

export const resetForm = ()=> ({
  type: RESET_FORM,
});

