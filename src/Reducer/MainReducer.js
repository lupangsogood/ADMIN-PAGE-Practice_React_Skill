import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  ProductReducer,
  UserReducer
});
