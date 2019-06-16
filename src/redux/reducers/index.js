import { combineReducers } from "redux";
import books from "./bookReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  books,
  authors
});

export default rootReducer;
