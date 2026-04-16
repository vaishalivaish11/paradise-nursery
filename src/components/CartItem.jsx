import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      {/* Plant Image */}
      <img src={item.image} alt={item.name} width="60" />

      {/* Name */}
      <h4>{item.name}</h4>

      {/* Price */}
      <p>${item.price}</p>

      {/* Quantity Controls */}
      <div>
        <button onClick={handleDecrease}>-</button>
        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      {/* Total */}
      <p>${item.price * item.quantity}</p>

      {/* Remove */}
      <button onClick={() => dispatch(removeItem(item.id))}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;
