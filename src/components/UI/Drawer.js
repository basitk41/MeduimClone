import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { sidenavStyle, closebtnStyle, backdropStyle } from "../Styles/Styles";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/drawer";
const Drawer = ({
  isOpened,
  setIsOpened,
  text,
  setComments,
  comments,
  updateComment,
  setText,
  deleteComment,
}) => {
  const [comment, setComment] = useState("");
  const style = { ...sidenavStyle, width: isOpened ? "250px" : "0px" };
  const backdrop = {
    ...backdropStyle,
    cursor: isOpened ? "pointer" : "",
    zIndex: isOpened ? "1" : "-1",
  };
  useEffect(() => {
    const index = comments.findIndex((item) => item.text === text);
    if (index > -1) setComment(comments[index].comment);
  }, [text, comments]);
  return (
    <div style={backdrop} onClick={() => setIsOpened(false)}>
      <div style={style} onClick={(e) => e.stopPropagation()}>
        <a href style={closebtnStyle} onClick={() => setIsOpened(false)}>
          &times;
        </a>
        <h3>Comments</h3>
        <h6 style={{ height: "45px" }}>
          <span style={{ backgroundColor: "rgba(26, 137, 23, 0.2)" }}>
            {text}
          </span>
        </h6>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="form-group">
              <input
                placeholder="type comment"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="form-group mt-1" style={{ textAlign: "right" }}>
              <button
                className="btn btn-success"
                onClick={() => {
                  if (text.length > 0) {
                    const index = comments.findIndex(
                      (item) => item.text === text
                    );
                    if (index < 0) setComments({ text, comment });
                    else updateComment({ text, comment }, index);
                    setText("");
                    setComment("");
                  }
                }}
                disabled={comment.length > 0 && text.length > 0 ? false : true}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div style={{ marginTop: "10px", overflowY: "auto", height: "530px" }}>
          {comments.map((cmt, i) => (
            <div
              key={i}
              className="card border-success mb-3"
              style={{ maxWidth: "15rem", marginLeft: "5px" }}
              onClick={(e) => {
                e.stopPropagation();
                setText(cmt.text);
                setComment(cmt.comment);
              }}
            >
              <div className="card-header">{cmt.text}</div>
              <div className="card-body text-success">
                <p className="card-text">{cmt.comment}</p>
                <span style={{ marginLeft: "135px" }}>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteComment(i);
                      setText("");
                      setComment("");
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
