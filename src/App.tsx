import React, { useContext, useRef } from "react";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebaseSetup/firebaseSetup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Shophomepage from "./pages/Shophomepage";
import Login from "./pages/login";


function App() {
  
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Shophomepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mycart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
