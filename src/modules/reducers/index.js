import { combineReducers } from "redux";

import products from "./products";
import login from "./login";

export default combineReducers({ products, login }); 