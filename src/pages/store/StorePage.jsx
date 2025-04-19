import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services';
import Navbar from '../../components/navbar/Navbar';
import styles from "./store.module.css";

const StorePage = () => {
  const { id } = useParams();
  console.log("id", id);

  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts(id);
      const resData = productsData.data.data;

      console.log(resData);
      setProductsData(resData);
    };

    fetchProducts();
  }, []);


  return (
    <>
      <Navbar />
      <div className={styles.storePageContainer}>
        Store page
      </div>
    </>
  )
}

export default StorePage;
