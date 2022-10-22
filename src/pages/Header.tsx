import React, { useContext, useRef, useState } from "react";
import "../index.css";
import icon from "../image/download.png";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import { AuthContext } from "../context/AuthContext";
import { IconProfile } from "../image/icons";

const Header: React.FC = () => {
  const user = useContext(AuthContext);

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
        <Button variant="standard" backgroundColor="dark">
          About
        </Button>
        <Button variant="standard" backgroundColor="dark">
          Discover
        </Button>
        <Button variant="standard" backgroundColor="dark">
          Your Cart
        </Button>
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
