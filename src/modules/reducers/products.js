
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
  CHANGE_IMAGES,
  EDIT_PRODUCT,
  SET_EDIT,
  SET_RESET,
  SET_IS_ERROR,
} from "../actionTypes";

const initialState = {
  productsData: [],
  isLoadProducts: false,
  isLoading: false,
  isError: false,
  name: "",
  category: "",
  price: "",
  quantity: "",
  descriptions: "",
  images: [""],
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

    case SET_IS_ERROR: {
      return {
        ...state,
        isError: true,
      }
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
      const { editId, editName, editCategory, editDescriptions, editImages, editPrice, editQuantity } = action.payload;

      return {
        ...state,
        editId,
        name: editName,
        category: editCategory,
        descriptions: editDescriptions,
        price: editPrice,
        quantity: editQuantity,
        images: editImages,
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
        images: [""],
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

    case CHANGE_IMAGES: {
      const { index, newImage} = action.payload;
      const updatedImages = [...state.images];
      updatedImages[index] = newImage;

      return {
        ...state,
        images: updatedImages,
      }
    }

    default:
      return state;
  }
};

export default products;
