import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { FaStore } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();

    const goToCart = () => {
        navigate("/cart");
    };

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className={styles.navbarContainer}>
            <button onClick={goToHome}>Hyperlocal Store&nbsp;<FaStore /></button>
            <button onClick={goToCart}><FaShoppingCart size={18} /></button>
        </div>
    )
}

export default Navbar;
