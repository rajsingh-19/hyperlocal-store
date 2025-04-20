import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import StorePage from "./pages/store/StorePage";
import CartPage from "./pages/cart/CartPage";
import OrderConfirmationPage from "./pages/order/OrderConfirmationPage";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;