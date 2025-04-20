import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../services';
import Navbar from '../../components/navbar/Navbar';
import Product from '../../components/product/Product';
import styles from "./store.module.css";
import { useCart } from '../../context/cartContext';

const StorePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts(id);
      const resData = productsData.data.data;
  
      setProductsData(resData);
      setFilteredProducts(resData);
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    if (productsData) {
      const filtered = productsData.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, productsData]);
  
  const goToCart = () => {
    navigate('/cart');
  };
  
  return (
    <>
      <Navbar />
      <div className={styles.storePageContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}/>

        <div className={styles.storeListContainer}>
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((item, i) => (
              <Product key={i} item={item} handleAddToCart={addToCart} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
        <button className={styles.cartBtn} onClick={goToCart}>View Cart</button>
      </div>
    </>
  )
}

export default StorePage;
