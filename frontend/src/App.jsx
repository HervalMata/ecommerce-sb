import { useState } from 'react'
import './App.css'
import Products from "./components/products/Products.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import About from "./components/About.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  )
}

export default App
