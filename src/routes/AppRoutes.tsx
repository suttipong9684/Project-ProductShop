import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Component imports
import HomePage from "../pages/HomePage";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import ProductDetail from "../components/ProductDetail ";
import Checkout from "../components/Checkout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Checkout" element={<Checkout />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
