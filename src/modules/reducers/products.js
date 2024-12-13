import {
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  SET_IS_LOADING,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  FILL_FORM,
  UPD_FORM,
  RESET_FORM,
  IS_ERROR,
} from "../actionTypes";

const initialState = {
  productsData: [],
  isLoading: false,
  isLoadProducts: false,
  isError: false,
  form: {
    id: null,
    name: "",
    category: "",
    price: "",
    quantity: "",
    descriptions: "",
    image: "",
  }
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { 
        ...state, 
        productsData: action.payload.productsData, isLoadProducts: true
      };

    case ADD_PRODUCT:
      return {
        ...state,
        productsData: [...state.productsData, action.payload],
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        productsData: state.productsData.map((product)=> product.id === action.payload.id ?
        action.payload : product
        )
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        productsData: state.productsData.filter((product)=> product.id !== action.payload),
      };

    case UPD_FORM: {
      const { name, value } = action.payload;

      return {
        ...state,
        form: { ...state.form, [name]: value }
      }
    }

    case FILL_FORM:
      return {
        ...state,
        form: action.payload
      };


    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

      case IS_ERROR:
        return {
          ...state,
          isError: action.payload,
        }

    case RESET_FORM:
      return {
        ...state,
        form: initialState.form
      };

    default:
      return state;
  }
};

export default products;
