import React, { useState } from "react";
import styles from "./product.module.css";
import { GiFruitBowl } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import { BiSolidStore } from "react-icons/bi";

const Product = ({ item, handleAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(item);
    setAdded(true);
  };

  return (
    <div className={styles.productCard}>
        <div className={styles.cardHeader}>
            <h3><GiFruitBowl /> {item.name}</h3>
            <p className={styles.available}>Available: {item.quantity}</p>
        </div>
        <div className={styles.cardDetails}>
            <p><IoIosPricetag />Price: &nbsp;<strong>₹{item.price}</strong></p>
            <p><BiSolidStore />{item.storeName}</p>
        </div>
        <button className={styles.cartButton} onClick={handleClick} disabled={added}>{added ? "Added ✓" : "Add to Cart"}</button>
    </div>
  )
}

export default Product;
