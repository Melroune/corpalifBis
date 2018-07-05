import { combineReducers } from "redux";
import search from "./search";
import category from "./category";

export default combineReducers({
  category,
  search
});
