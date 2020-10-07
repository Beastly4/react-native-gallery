import { FETCH_IMAGES, HIDE_LOADER, SHOW_LOADER } from "./types";

const URL =
  "https://api.unsplash.com/photos/?client_id=tCdVGtO8jGpBL3JxrGUYoLCVpVOuI5VXd1TfMjkMz8g";

export function fetchImages() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(URL);
    const json = await response.json();
    dispatch({ type: FETCH_IMAGES, payload: json });
    dispatch(hideLoader());
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
