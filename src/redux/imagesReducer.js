import { FETCH_IMAGES } from "./types";

const initialState = [];

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return [...state, action.payload];
    default:
      return state;
  }
};
