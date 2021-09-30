import * as ActionsCreator from "../actions/index";
export const mapStateToProps = (state) => {
  return {
    searchResult: state.search.search,
    inputField: state.search.input,
    loading: state.search.loading,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    initSearch: (search) => dispatch(ActionsCreator.initSearch(search)),
    updateInput: (input) => dispatch(ActionsCreator.updateInput(input)),
  };
};
