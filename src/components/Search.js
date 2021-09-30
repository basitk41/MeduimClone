import React from "react";
import { connect } from "react-redux";
import Spinner from "./UI/Spinner";
import Card from "./UI/Card";
import { mapDispatchToProps, mapStateToProps } from "../store/helper/search";
const Search = ({
  searchResult,
  inputField,
  loading,
  initSearch,
  updateInput,
}) => {
  return (
    <div>
      <br />
      <h3 style={{ textAlign: "center", fontSize: "35px" }}>
        <b>WikiMedium Search Engine</b>
      </h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="input-group mb-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search Wikipedia Articles"
                value={inputField}
                onChange={(e) => updateInput(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => initSearch(inputField)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          {loading ? (
            <Spinner />
          ) : (
            searchResult.map((item, i) => {
              return <Card key={i} item={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
