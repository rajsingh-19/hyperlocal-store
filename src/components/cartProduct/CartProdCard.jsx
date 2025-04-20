import React, { useState } from 'react';
import styles from "./cartProdCard.module.css";
import { useCart } from '../../context/cartContext';

const CartProdCard = ({ item, quantity, onQuantityChange }) => {
    const { cartList } = useCart();

    const cartItem = cartList.find(prod => prod.name === item.name);
    const availableQuantity = cartItem?.quantity || 1; 

    const handleInc = () => {
        if (quantity < availableQuantity) {
          onQuantityChange(item.name, quantity + 1);
        };
    };
    
    const handleDec = () => {
        if (quantity > 1) {
          onQuantityChange(item.name, quantity - 1);
        };
    };

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>Price: ₹{item.price}</p>
                <p className={styles.store}>Store: {item.storeName}</p>
            </div>
            <div className={styles.quantityControls}>
                <button onClick={handleDec} className={styles.qtyBtn}>-</button>
                <span className={styles.qtyDisplay}>Quantity: {quantity}</span>
                <button 
                    onClick={handleInc} 
                    className={styles.qtyBtn} 
                    disabled={quantity === availableQuantity}
                >
                    +
                </button>
            </div>
            {quantity === availableQuantity && (
                <p className={styles.limitMsg}>Max available quantity reached</p>
            )}
        </div>
    )
}

export default CartProdCard;
