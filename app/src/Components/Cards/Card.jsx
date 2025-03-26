import React, { useState } from "react";
import "./card.css";
import Swal from "sweetalert2";

export const Card = ({
  imgsrc,
  title,
  price,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(1);
  const [isCountVisible, setIsCountVisible] = useState(false);

  const handleItemAdd = () => {
    Swal.fire({
      title: "Item Added!",
      text: "Item Added Successfully!",
      icon: "success",
    });
    setIsAdded(true);
    setIsCountVisible(true);
    onAddToCart(); // Notify ShopPage
  };

  const handleIncrease = () => {
    setCount(count + 1);
    onAddToCart(); // Increase cart count
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      onRemoveFromCart(); // Decrease cart count
    } else {
      setIsAdded(false);
      setIsCountVisible(false);
      onRemoveFromCart(); // Remove from cart when last item is removed
    }
  };

  return (
    <div className="card-container">
      <img
        src={imgsrc}
        alt={title}
        style={{ width: "200px", height: "200px" }}
      />
      <h6>{title}</h6>
      <p className="fw-bold price">{price}</p>

      {!isCountVisible ? (
        <div className="addtocart" onClick={handleItemAdd}>
          Add to Cart
        </div>
      ) : (
        <div className="plus_minus">
          <button className="increase fw-bold" onClick={handleDecrease}>
            -
          </button>
          <p>{count}</p>
          <button className="decrease fw-bold" onClick={handleIncrease}>
            +
          </button>
        </div>
      )}
    </div>
  );
};
