import React, { useContext, useRef, useState } from "react";
import "../index.css";
import icon from "../image/download.png";
import Button1 from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import { AuthContext } from "../context/AuthContext";
import { IconProfile } from "../image/icons";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import DropDownMenu from "../core/DropDownMenu";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import { borderRadius } from "@mui/system";

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
        <Button1
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
        {/* <Button1
          variant="standard"
          backgroundColor="dark"
          onClick={() => navigate("/")}
        >
          Home
        </Button1> */}
        
        <Button style={{color:'white'}} variant="text" size="large">Home</Button>
        <DropDownMenu />
        {/* <Button variant="standard" backgroundColor="dark">
          Topics
        </Button> */}
        {/* <button className="button-cart" data-tooltip={quantity} onClick={() => navigate("/mycart")}>
          Your Cart
        </button> */}
        {/* bg-green-900 text-black rounded-full */}
        {quantity === 0 ? (
        <Button style={{color:'white'}} variant="text" color="inherit" size="large" onClick={() => navigate("/mycart")}>My Cart</Button>
        ) : (
          <Button style={{color:'white'}} className="button-cart" data-tooltip={quantity} variant="text" color="inherit" size="large" onClick={() => navigate("/mycart")}>My Cart</Button>
          )}
        {/* <Button1
          onClick={signOut}
          variant="non-standard"
          backgroundColor="light"
        >
          Sign Out
        </Button1> */}
        <Button style={{color:'white',backgroundColor:'green',borderRadius:'20px'}} variant="text"  size="large" onClick={signOut}>Sign out</Button>

      </div>
    </>
  );
};
export default Header;
