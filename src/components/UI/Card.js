import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <div className="card" style={{ marginBottom: "8px" }}>
      <Link to={`/wiki/${item.key}`} style={{ textDecoration: "none" }}>
        <h5 className="card-header">{item.title}</h5>
      </Link>
      <div className="card-body">
        <p className="card-text">{parse(item.excerpt)}</p>
        <a
          href={`https://en.wikipedia.org/wiki/${item.key}`}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Go to official website
        </a>
      </div>
    </div>
  );
};

export default Card;
