import { combineReducers } from "redux";
import { imagesReducer } from "./imagesReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
  images: imagesReducer,
  loader: loaderReducer,
});
