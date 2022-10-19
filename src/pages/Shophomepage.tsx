import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import "../index.css";
import Header from "./Header";


const ShopPage: React.FC = () => {
  const user = useContext(AuthContext);

  const signOut = async () => {
    await auth.signOut();
  };
  return (
    <>
    
    <div className="mainhome">
      <video loop autoPlay muted className="video">
        <source src={require('../image/video.mp4')} type="video/mp4" />
      </video>
      <Header/>
          <div className="mt-4 text-center text-red-500">Welcome {user?.email}</div>
      <Button onClick={signOut} variant="standard" backgroundColor="dark">Sign Out</Button>
  
      
    </div>
    </>
  );
};
export default ShopPage;
