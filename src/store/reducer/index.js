import { combineReducers } from "redux";
import content from "./content";
import search from "./search";
const rootReducer = combineReducers({
  content,
  search,
});
export default rootReducer;
