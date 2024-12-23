
import {
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  SET_IS_LOADING,
  ADD_PRODUCT,
  CHANGE_NAME,
  CHANGE_CATEGORY,
  CHANGE_DESCRIPTIONS,
  CHANGE_PRICE,
  CHANGE_QUANTITY,
  CHANGE_IMAGE,
  EDIT_PRODUCT,
  SET_EDIT,
  SET_RESET,
} from "../actionTypes";

const initialState = {
  productsData: [],
  isLoadProducts: false,
  isLoading: false,
  name: "",
  category: "",
  price: "",
  quantity: "",
  descriptions: "",
  image: "",
  editId: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      const { productsData } = action.payload;
      return { ...state, productsData, isLoadProducts: true, isLoading: false };
    }

    case DELETE_PRODUCT: {
      return {
        ...state,
        isLoadProducts: false,
      };
    }

    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SET_RESET: {
      return {
        ...state,
        editId: null,
        name: "",
        category: "",
        price: "",
        quantity: "",
        descriptions: "",
        image: "",
      }
    }

    case ADD_PRODUCT: {
      return {
        ...state,
        isLoading: true,
        isLoadProducts: false,
        name: "",
        category: "",
        price: "",
        quantity: "",
        descriptions: "",
        image: "",
      };
    }

    case SET_EDIT: {
      const { editId, editName, editCategory, editDescriptions, editImage, editPrice, editQuantity } = action.payload;

      return {
        ...state,
        editId,
        name: editName,
        category: editCategory,
        descriptions: editDescriptions,
        price: editPrice,
        quantity: editQuantity,
        image: editImage,
      }
    };

    case EDIT_PRODUCT: {
      return {
        ...state,
        isLoadProducts: false,
        editId: null,
        name: "",
        category: "",
        price: "",
        quantity: "",
        descriptions: "",
        image: "",
      };
    }

    case CHANGE_NAME: {
      const {name} = action.payload;

      return {
        ...state,
        name,
      }
    }

    case CHANGE_CATEGORY: {
      const {category} = action.payload;

      return {
        ...state,
        category,
      }
    }

    case CHANGE_DESCRIPTIONS: {
      const {descriptions} = action.payload;

      return {
        ...state,
        descriptions,
      }
    }

    case CHANGE_QUANTITY: {
      const {quantity} = action.payload;

      return {
        ...state,
        quantity,
      }
    }

    case CHANGE_PRICE: {
      const {price} = action.payload;

      return {
        ...state,
        price,
      }
    }

    case CHANGE_IMAGE: {
      const {image} = action.payload;

      return {
        ...state,
        image,
      }
    }

    default:
      return state;
  }
};

export default products;
