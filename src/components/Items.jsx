import React from "react";
import "../style.css";

export default function Items(props) {
  return (
    <>
      <div className="card mx-3 my-3" style={{ width: "20rem" }}>
        <div className="text-center product-image">
          <img
            src={props.image}
            className="card-img-top"
            alt="..."
            style={{ width: "70%", height: "70%" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">${props.price}</li>
          <li className="list-group-item">
            Rating: {props.rate} {""}
            <span className="font-italic" style={{ color: "grey" }}>
              ({props.count})
            </span>
          </li>
          <li className="list-group-item">
            Category:{" "}
            {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
          </li>
        </ul>
        {/* <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div> */}
      </div>
    </>
  );
}
