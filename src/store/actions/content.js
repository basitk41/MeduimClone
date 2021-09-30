import * as Actions from "../constants/index";
import { getData } from "../../utils/persistance";
import axios from "axios";
export const setContent = (content) => {
  return {
    type: Actions.SETCONTENT,
    content,
  };
};
export const setComments = (comments) => {
  return {
    type: Actions.SETCOMMENTS,
    comments,
  };
};
export const initComments = (comments) => {
  return {
    type: Actions.INITCOMMENTS,
    comments,
  };
};
export const updateComment = (comment, index) => {
  return {
    type: Actions.UPDATECOMMENT,
    comment,
    index,
  };
};
export const deleteComment = (index) => {
  return {
    type: Actions.DELETECOMMENT,
    index,
  };
};
export const setNode = (node) => {
  return {
    type: Actions.SETNODE,
    node,
  };
};
export const setPosition = (position) => {
  return {
    type: Actions.SETPOSITION,
    position,
  };
};
export const setSelectedInnerText = (text) => {
  return {
    type: Actions.SETSELECTEDINNERTEXT,
    text,
  };
};
export const setSelectedText = (text) => {
  return {
    type: Actions.SETSELECTEDTEXT,
    text,
  };
};
export const setIsOpenedHighlighted = (bool) => {
  return {
    type: Actions.SETISOPENEDHIGHLIGHTED,
    bool,
  };
};
export const setIsOpened = (bool) => {
  return {
    type: Actions.SETISOPENED,
    bool,
  };
};
export const setIsDrawerOpened = (bool) => {
  return {
    type: Actions.SETISDRAWEROPENED,
    bool,
  };
};
export const loading = (value) => {
  return {
    type: Actions.LOADING,
    value,
  };
};
export const initContent = (keyword) => {
  return (dispatch) => {
    dispatch(loading(true));
    const data = getData().filter((item) => item.key === keyword);
    if (data.length > 0) {
      dispatch(setContent(data[0].content));
      dispatch(initComments(data[0].comments));
      dispatch(loading(false));
    } else {
      dispatch(initComments([]));
      axios
        .get(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&continue=-%7C%7C&utf8=1&srsearch=${keyword}&sroffset=10`
        )
        .then((response) => {
          const data = response.data.query.search;
          const arr = [];
          for (let i = 0; i < 5; i++) {
            arr.push(
              `<p>${data[i].snippet
                .replaceAll('<span class="searchmatch">', "")
                .replaceAll("</span>", "")}.</p>`
            );
          }
          dispatch(setContent(arr.join("")));
          dispatch(loading(false));
        })
        .catch((error) => {
          console.log("Something went wrong!");
          console.log(error);
          dispatch(loading(false));
        });
    }
  };
};
