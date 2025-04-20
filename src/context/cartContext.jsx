import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList((prev) => [...prev, item]);
    };

    return (
        <CartContext.Provider value={{ addToCart, cartList, setCartList }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext);
