import React from "react";
import "./index.css";
import image from "../src/images/search.png";

export default function Search() {
  return (
    <div className="search-inner">
      <form className="form-inner" id="search-form">
        <div>
          <input
            className="form-item"
            id="form-item"
            type="text"
            placeholder="City name..."
          />
        </div>
        <button className="form-btn" type="submit" autocomplete="off">
          <span className="span-search">Search</span>
          <img className="search-img" src={image} alt="search" />
        </button>
      </form>
    </div>
  );
}
