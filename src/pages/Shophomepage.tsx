import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import "../index.css";
import Header from "./Header";
import axios from "axios";
import { Image } from "../core/Image";
import Card from "../core/Card";

const ShopPage: React.FC = () => {
  const user = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      });
  }, []);

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <div className="mainhome">
        <video autoPlay loop muted className="video">
          {/* <source src={require("../image/video.mp4")} type="video/mp4" /> */}
        </video>
        <Header />
        <section className="photo-grid-container">
          {products.map(({ images, price, title, id }) => (
            <>
                <Card title={title} imageUrl={images} body={price}/>
            </>
          ))}
        </section>
      </div>
    </>
  );
};
export default ShopPage;
