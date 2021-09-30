import * as ActionsCreator from "../actions/index";
export const mapStateToProps = (state) => {
  return {
    position: state.content.position,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    setIsDrawerOpened: (bool) =>
      dispatch(ActionsCreator.setIsDrawerOpened(bool)),
  };
};
