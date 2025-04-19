import React, { useEffect, useState } from 'react';
import styles from "./home.module.css";
import { getAllStores, getStoresByLocation } from "../../services/index";
import Navbar from '../../components/navbar/Navbar';
import StoreCard from '../../components/store/StoreCard';

const HomePage = () => {
  const [storesData, setStoresData] = useState(null);
  const [isDataPresent, setISDataPresent] = useState(false);
  const [activeStore, setActiveStore] = useState("All");

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const storeData = await getAllStores();
        const resData = storeData.data.data;
  
        setISDataPresent(true);
        setStoresData(resData);
      } catch(error) {
        console.error("Error fetching stores:", error?.response?.data?.message || error.message);
        setISDataPresent(false);
      }
    } 

    fetchStoreData();
  }, []);

  const fetchStoresByLocation = async (location) => {
    try {
      const res = await getStoresByLocation(location);
      const resData = res.data.data;
  
      setStoresData(resData);
      setISDataPresent(true);
    } catch (error) {
      console.error("Error fetching stores:", error.message);
      setISDataPresent(false);
    }
  };

  const cities = [{city: "All"}, {city: "MG Road"}, {city: "Indiranagar"}, {city: "Koramangala"}, {city: "Jayanagar"}, {city: "Malleshwaram"}, {city: "HSR Layout"}];

  return (
    <>
      <Navbar />
      <div className={styles.homePageContainer}>
        <div className={styles.citiesContainer}>
          {
            cities?.map((item) => (
              <button key={item.city} className={`${styles.citiesBtn} ${activeStore === item.city ? styles.activeCity : ""}`} onClick={() => {setActiveStore(item.city); fetchStoresByLocation(item.city);}} >{item.city}</button>
            ))
          }
        </div>

        <div className={styles.storesContainer} >
          {
            isDataPresent && storesData?.map((item, i) => {
              return (
                <StoreCard key={i} store={item} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default HomePage;
