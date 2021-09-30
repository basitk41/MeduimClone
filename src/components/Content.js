import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import Spinner from "./UI/Spinner";
import Tooltip from "./UI/Tooltip";
import { highlighter } from "../utils/highlighter";
import { setData } from "../utils/persistance";
import { headingStyle, contentStyle } from "./Styles/Styles";
import { mapDispatchToProps, mapStateToProps } from "../store/helper/content";
import {
  tooltipPosition,
  getSelection,
  getSelectionHtml,
} from "../utils/window";
import Drawer from "./UI/Drawer";
const Content = ({
  content,
  loading,
  comments,
  node,
  selectedText,
  selectedInnerText,
  isOpened,
  isOpenedHighlighted,
  history,
  match,
  initContent,
  setContent,
  setNode,
  setPosition,
  setSelectedText,
  setSelectedInnerText,
  setIsOpenedHighlighted,
  setIsOpened,
  deleteComment,
}) => {
  const [key, setKey] = useState("");
  useEffect(() => {
    const key = match.params.name;
    setKey(key);
    initContent(key);
    //eslint-disable-next-line
  }, [match.params.name]);
  useEffect(() => {
    setData({ key, content, comments });
  }, [key, content, comments]);
  const handleHightlight = () => {
    const convertedText = highlighter(selectedText);
    let newNode = node.outerHTML.replace(selectedText, convertedText);
    const updatedText = content.replace(node.outerHTML, newNode);
    setContent(updatedText);
    setIsOpened(false);
  };
  const handleUnHightlight = () => {
    const index = comments.findIndex((item) => item.text === selectedInnerText);
    if (index > -1) deleteComment(index);
    let newNode = node.outerHTML.replace(selectedText, selectedInnerText);
    const newT = content.replace(node.outerHTML, newNode);
    setContent(newT);
    setIsOpenedHighlighted(false);
  };
  const mouseEnterHandler = (e) => {
    if (!isOpenedHighlighted) {
      setSelectedText(e.target.outerHTML);
      setSelectedInnerText(e.target.innerHTML);
      setNode(e.target.parentElement);
      setPosition({ x: e.x, y: e.y });
      setIsOpenedHighlighted(true);
    }
  };
  const attachEvents = () => {
    const marks = document.querySelectorAll("mark");
    marks.forEach((e) => e.addEventListener("mouseenter", mouseEnterHandler));
  };
  attachEvents();
  return (
    <div>
      <p style={{ textAlign: "right", marginTop: "5px" }}>
        <button className="btn btn-info" onClick={() => history.goBack()}>
          Back
        </button>
      </p>
      <h1 style={headingStyle}>{match.params.name.split("_").join(" ")}</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={contentStyle}
          tabIndex={1}
          id="text"
          onMouseUp={(e) => {
            if (getSelection.isCollapsed) {
              setIsOpened(false);
              setIsOpenedHighlighted(false);
            } else {
              setIsOpenedHighlighted(false);
              setIsOpened(true);
            }
            setPosition(tooltipPosition());
            setNode(e.target);
            setSelectedText(getSelectionHtml());
          }}
        >
          {parse(content)}
        </div>
      )}
      {isOpened ? (
        <Tooltip
          handleHightlight={handleHightlight}
          isHighlighted={false}
          setIsOpened={setIsOpened}
          selectedText={selectedText}
          setSelectedInnerText={setSelectedInnerText}
        />
      ) : null}
      {isOpenedHighlighted ? (
        <Tooltip
          handleHightlight={handleUnHightlight}
          isHighlighted={true}
          setIsOpened={setIsOpenedHighlighted}
          selectedText={selectedText}
          setSelectedInnerText={setSelectedInnerText}
        />
      ) : null}
      <Drawer />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
