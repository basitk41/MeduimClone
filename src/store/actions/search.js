import * as Actions from "../constants/index";
import axios from "axios";
export const setSearch = (search) => {
  return {
    type: Actions.SETSEARCH,
    search,
  };
};
export const updateInput = (input) => {
  return {
    type: Actions.SETINPUT,
    input,
  };
};
export const loading = (value) => {
  return {
    type: Actions.LOADING,
    value,
  };
};
export const initSearch = (inputField) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .get(
        `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${inputField}&limit=8`
      )
      .then((response) => {
        dispatch(setSearch(response.data.pages));
        dispatch(loading(false));
      })
      .catch((error) => {
        console.log("Something went wrong!");
        console.log(error);
        dispatch(loading(false));
      });
  };
};
