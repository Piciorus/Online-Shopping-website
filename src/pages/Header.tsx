import React, { useContext, useRef, useState } from "react";
import "../index.css";
import icon from "../image/download.png";
import Button from "../core/Button";


const Header: React.FC = () => {

  return (
    <>
      <div className="flex flex-row w-24 mt-6 ml-64 space-x-36">
        <img src={icon} />
        <Button variant="standard" backgroundColor="dark">Sign Out</Button>
        <Button variant="standard" backgroundColor="dark">Sign Out</Button>
        <Button variant="standard" backgroundColor="dark">Sign Out</Button>
      </div>

    </>
  );
};
export default Header;
