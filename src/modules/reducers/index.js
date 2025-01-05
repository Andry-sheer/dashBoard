import { combineReducers } from "redux";

import products from "./products";
import login from "./login";
import overlay from "./overlay";


export default combineReducers({ 
  products, 
  login,
  overlay,
}); 