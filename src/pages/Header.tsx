import React, { useContext, useRef, useState } from "react";
import "../index.css";
import icon from "../image/download.png";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import { AuthContext } from "../context/AuthContext";
import { IconProfile } from "../image/icons";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Header: React.FC = () => {
  const { cartQuantity } = useShoppingCart();
  const quantity = cartQuantity;
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = async () => {
    await auth.signOut();
  };
  return (
    <>
      <div className="flex text-center text-green-500">
        <Button
          backgroundColor="dark"
          variant="icon"
          size="small"
          icon={<IconProfile />}
        />
        <div className="mt-1">{user?.email}</div>
      </div>
      <h1 className="flex justify-center w-24 mx-auto">
        <img src={icon} />
      </h1>
      <div className="conti">
        <Button
          variant="standard"
          backgroundColor="dark"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button variant="standard" backgroundColor="dark">
          Discover
        </Button>
        <button className="button-cart" data-tooltip={quantity} onClick={() => navigate("/mycart")}>
          Your Cart
        </button>
        <Button
          onClick={signOut}
          variant="non-standard"
          backgroundColor="light"
        >
          Sign Out
        </Button>
      </div>
    </>
  );
};
export default Header;
