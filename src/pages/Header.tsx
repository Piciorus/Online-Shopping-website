import React, { useContext, useRef, useState } from "react";
import "../index.css";
import icon from "../image/download.png";
import Button from "../core/Button";


const Header: React.FC = () => {

  return (
    <>
      <h1 className="flex justify-center w-24 mx-auto">
        <img src={icon} />
       
        
    </h1>
    <div className="flex justify-center w-54 space-x-2 mt-3">

        <Button variant="standard" backgroundColor="dark">About</Button>
        <Button variant="standard" backgroundColor="dark">Discover</Button>
        <Button variant="standard" backgroundColor="dark">Your Cart</Button>
        <Button variant="standard" backgroundColor="dark">Sign Out</Button>
        
      </div>
      <div className="flex justify-right mx-auto ">
        <Button variant="non-standard" backgroundColor="light">Sign Out</Button>
        </div>

    </>
  );
};
export default Header;
