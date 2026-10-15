import React, { useState } from 'react'
import './App.css'
import Products from "./components/products/Products.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {Toaster} from "react-hot-toast";
import Cart from "./components/cart/Cart.jsx";
import Login from "./components/auth/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Register from "./components/auth/Register.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
        <Toaster position="bottom-center" />
    </React.Fragment>
  )
}

export default App
