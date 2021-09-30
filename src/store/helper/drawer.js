import * as ActionsCreator from "../actions/index";
export const mapStateToProps = (state) => {
  return {
    isOpened: state.content.isDrawerOpened,
    text: state.content.selectedInnerText,
    comments: state.content.comments,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    setIsOpened: (bool) => dispatch(ActionsCreator.setIsDrawerOpened(bool)),
    setComments: (comment) => dispatch(ActionsCreator.setComments(comment)),
    updateComment: (comment, index) =>
      dispatch(ActionsCreator.updateComment(comment, index)),
    setText: (text) => dispatch(ActionsCreator.setSelectedInnerText(text)),
    deleteComment: (index) => dispatch(ActionsCreator.deleteComment(index)),
  };
};
