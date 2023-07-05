// ItemDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style.css";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (!item) return <h2 className="text-center my-3">Loading...</h2>;

  return (
    <div className="my-3 mx-3">
      <div></div>
      <div className="d-flex">
        <img src={item.image} alt="" className="h-25 w-25 my-5" />
        <div className="d-flex flex-column itemDetails mx-5">
          <h2 className="py-3">{item.title}</h2>
          <p>${item.price}</p>
          <p>
            {item.description.charAt(0).toUpperCase() +
              item.description.slice(1)}
          </p>
          <p>Rating: {item.rating.rate}</p>
        </div>
      </div>
    </div>
  );
}
