import React from "react";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../../store/helper/tooltip";
const Tooltip = ({
  handleHightlight,
  position,
  isHighlighted,
  setIsDrawerOpened,
  setIsOpened,
  selectedText,
  setSelectedInnerText,
}) => {
  const tooltipStyle = {
    top: position.y - 50,
    left: position.x,
    position: "absolute",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={tooltipStyle}>
      <i
        className="fa fa-paint-brush"
        style={{
          cursor: "pointer",
          marginRight: "10px",
          color: isHighlighted ? "pink" : "",
        }}
        onClick={handleHightlight}
      ></i>
      <i
        className="fa fa-comment"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setIsDrawerOpened(true);
          setIsOpened(false);
          if (!isHighlighted) {
            handleHightlight();
            setSelectedInnerText(selectedText);
          }
        }}
      ></i>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Tooltip);
