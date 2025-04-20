import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./cart.module.css";
import Navbar from "../../components/navbar/Navbar";
import CartProdCard from "../../components/cartProduct/CartProdCard";
import { useCart } from "../../context/cartContext";
import { placeOrder } from "../../services";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartList, setCartList } = useCart();
  const [name, setName] = useState("");

  const [quantities, setQuantities] = useState(
    cartList.reduce((acc, item) => {
      acc[item.name] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (name, newQty) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: newQty,
    }));
  };

  const totalPrice = cartList.reduce((acc, item) => {
    const qty = quantities[item.name] || 1;
    return acc + item.price * qty;
  }, 0);

  const handlePlaceOrder = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    const cartPayload = cartList.map((item) => ({
      productId: item._id,
      quantity: quantities[item.name] || 1,
    }));

    const orderData = {
      name,
      cart: cartPayload,
      total: totalPrice,
    };

    try {
      const response = await placeOrder(orderData);
      alert("Order placed successfully!");
      setCartList([]);
      navigate("/order-confirmation", {state: {name}});
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.cartPageContainer}>
        <p className={styles.heading}>Your Cart</p>
        {cartList.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div className={styles.cartProdListContainer}>
            {cartList.map((item, index) => (
              <CartProdCard key={index} item={item} quantity={quantities[item.name]}
              onQuantityChange={handleQuantityChange} />
            ))}
            <div className={styles.totalPrice}>Total: ₹{totalPrice}</div>
            <div className={styles.nameContainer}>
              <input type="text" placeholder="Your Name" className={styles.nameInput} value={name} onChange={(e) => setName(e.target.value)} />
              <button className={styles.placeOrderBtn} onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartPage;
