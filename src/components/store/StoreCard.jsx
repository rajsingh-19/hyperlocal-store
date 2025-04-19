import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./storecard.module.css";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const StoreCard = ({ store }) => {
  const navigate = useNavigate();

  const goToStorePage = (id) => {
    navigate(`/store/${id}`);
  };

  return (
    <div className={styles.storeCard} onClick={() => goToStorePage(store._id)}>
      <div className={styles.iconWrapper}>
        <IoStorefrontOutline size={40} />
      </div>
      <div className={styles.storeInfo}>
        <h3 className={styles.storeName}>{store.name}</h3>
        <p className={styles.storeLocation}><FaLocationDot size={14} /> {store.location}</p>
      </div>
  </div>
  )
}

export default StoreCard;
