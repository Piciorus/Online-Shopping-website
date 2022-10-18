import React, { useContext, useRef } from "react";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebaseSetup";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function App() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
    </BrowserRouter>
    );
}

export default App;