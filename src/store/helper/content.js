import * as ActionsCreator from "../actions/index";
export const mapStateToProps = (state) => {
  return {
    content: state.content.content,
    position: state.content.position,
    comments: state.content.comments,
    node: state.content.node,
    selectedText: state.content.selectedText,
    selectedInnerText: state.content.selectedInnerText,
    isOpened: state.content.isOpened,
    isOpenedHighlighted: state.content.isOpenedHighlighted,
    isDrawerOpened: state.content.isDrawerOpened,
    loading: state.search.loading,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    initContent: (search) => dispatch(ActionsCreator.initContent(search)),
    setContent: (text) => dispatch(ActionsCreator.setContent(text)),
    setNode: (node) => dispatch(ActionsCreator.setNode(node)),
    setPosition: (position) => dispatch(ActionsCreator.setPosition(position)),
    setSelectedText: (text) => dispatch(ActionsCreator.setSelectedText(text)),
    setSelectedInnerText: (text) =>
      dispatch(ActionsCreator.setSelectedInnerText(text)),
    setIsOpenedHighlighted: (bool) =>
      dispatch(ActionsCreator.setIsOpenedHighlighted(bool)),
    setIsOpened: (bool) => dispatch(ActionsCreator.setIsOpened(bool)),
    setComments: (comments) => dispatch(ActionsCreator.setComments(comments)),
    updateComment: (comment, index) =>
      dispatch(ActionsCreator.updateComment(comment, index)),
    deleteComment: (comment) => dispatch(ActionsCreator.deleteComment(comment)),
    setIsDrawerOpened: (bool) =>
      dispatch(ActionsCreator.setIsDrawerOpened(bool)),
  };
};
