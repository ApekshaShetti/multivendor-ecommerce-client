import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import OrderFail from "./components/OrderFail";
// Customer
import Register from "./components/customer/Register";
import Login from "./components/customer/Login";
import Dashboard from "./components/customer/Dashboard";
import Orders from "./components/customer/Orders";
import Wishlist from "./components/customer/Wishlist";
import Profile from "./components/customer/Profile";
import ChangePassword from "./components/customer/ChangePassword";
import AddressList from "./components/customer/AddressList";
import AddAddress from "./components/customer/AddAddress";
// Seller
import SellerRegister from "./components/seller/SellerRegister";
import SellerLogin from "./components/seller/SellerLogin";
import SellerDashboard from "./components/seller/SellerDashboard";
import SellerProducts from "./components/seller/SellerProducts";
import AddProduct from "./components/seller/AddProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/category/:category_slug/:category_id"
          element={<CategoryProducts />}
        />
        <Route
          path="/product/:product_slug/:product_id"
          element={<ProductDetail />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/fail" element={<OrderFail />} />
        {/* Customer  */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/update-profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/address" element={<AddressList />} />
        <Route path="/add-address" element={<AddAddress />} />
        {/* Seller  */}
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/seller-products" element={<SellerProducts />} />
        <Route path="/add-Product" element={<AddProduct />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
