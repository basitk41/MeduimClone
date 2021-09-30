import * as Actions from "../constants/index";
const initialState = {
  search: [],
  input: "",
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SETSEARCH:
      return {
        ...state,
        search: [...action.search],
      };
    case Actions.SETINPUT:
      return {
        ...state,
        input: action.input,
      };
    case Actions.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
};
export default Reducer;
