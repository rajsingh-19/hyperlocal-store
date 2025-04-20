import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./order.module.css";
import Navbar from "../../components/navbar/Navbar";

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const customerName = location.state?.name || "Customer";

  const goToHome = () => {
    navigate('/');
  };

  return (
    <>    
      <Navbar />
      <div className={styles.orderPageContainer}>
        <p>Order Confirmed</p>
        <p>Thank you, {customerName}!</p>
        <p>Your order has been placed successfully.</p>
        <button onClick={goToHome}>Home</button>
      </div>
    </>
  );
};

export default OrderConfirmationPage;
