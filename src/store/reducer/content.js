import * as Actions from "../constants/index";
const initialState = {
  content: "",
  comments: [],
  position: { x: 0, y: 0 },
  isOpened: false,
  isOpenedHighlighted: false,
  selectedText: "",
  selectedInnerText: "",
  node: "",
  isDrawerOpened: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SETCONTENT:
      return { ...state, content: action.content };
    case Actions.INITCOMMENTS:
      return { ...state, comments: action.comments };
    case Actions.SETCOMMENTS:
      let comments1 = [...state.comments];
      comments1.push(action.comments);
      return { ...state, comments: [...comments1] };
    case Actions.UPDATECOMMENT:
      let comments2 = [...state.comments];
      comments2.splice(action.index, 1, action.comment);
      return { ...state, comments: [...comments2] };
    case Actions.DELETECOMMENT:
      let comments3 = [...state.comments];
      comments3.splice(action.index, 1);
      return { ...state, comments: [...comments3] };
    case Actions.SETPOSITION:
      return { ...state, position: action.position };
    case Actions.SETISOPENED:
      return { ...state, isOpened: action.bool };
    case Actions.SETISOPENEDHIGHLIGHTED:
      return { ...state, isOpenedHighlighted: action.bool };
    case Actions.SETSELECTEDTEXT:
      return { ...state, selectedText: action.text };
    case Actions.SETSELECTEDINNERTEXT:
      return { ...state, selectedInnerText: action.text };
    case Actions.SETNODE:
      return { ...state, node: action.node };
    case Actions.SETISDRAWEROPENED:
      return { ...state, isDrawerOpened: action.bool };
    default:
      return state;
  }
};
export default Reducer;
