import React from "react";
import "../style.css";

export default function Search() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-3">
        <form action="">
          <input
            type="text"
            name="search"
            id="searchProducts"
            placeholder="Search for Products"
          />
          <button type="submit" id="searchButton">
            Go
          </button>
        </form>
      </div>
    </>
  );
}
