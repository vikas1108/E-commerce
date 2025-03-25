import React from "react";
import "./card.css";
import { useState } from "react";
import Swal from "sweetalert2";

export const Card = ({ imgsrc, title, price }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(1);
  const [iscountVisible, setIsCountVisible] = useState(false);

  const handleItemAdd = () => {
    Swal.fire({
      title: "Item Added!",
      text: "Item Added Succesfully!",
      icon: "success",
    });
    setIsAdded(true);
    setIsCountVisible(true);
  };

  const handleIncrease = () => {
    let updateCount = count + 1;
    setCount(updateCount);
    console.log("agqin call increase side");
  };

  const handleDecrease = () => {
    if (count !== 1) {
      let updateCount = count - 1;
      setCount(updateCount);
    } else {
      setIsAdded(false);
      setIsCountVisible(false);
    }
    console.log("agqin call decrease");
  };

  return (
    <>
      <div className="card-container">
        <img
          src={imgsrc}
          alt={title}
          style={{ width: "200px", height: "200" }}
        ></img>
        <h6>{title}</h6>
        <p className="fw-bold price">{price}</p>

        {!iscountVisible ? (
          <>
            {" "}
            <div
              className="addtocart"
              onClick={() => {
                handleItemAdd();
              }}
            >
              add to card
            </div>
          </>
        ) : (
          <div className="plus_minus">
            <button
              className="increase fw-bold"
              onClick={() => {
                handleDecrease();
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              className="decrease fw-bold"
              onClick={() => {
                handleIncrease();
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
};
