import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import "../index.css";
import Header from "./Header";
import axios from "axios";
import { Image } from "../core/Image";

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
        <video muted className="video">
          <source src={require("../image/video.mp4")} type="video/mp4" />
        </video>
        <Header />
        <section className="photo-grid-container">
          {products.map(({ images, price, title, id }) => (
            <>
              <div className="grid-item">
                <Image size="standard" url={images} />
                <div className="text-white text-center">
                  {title}
                  {id}
                </div>
                <div className="text-white text-center">Price={price}$</div>
              </div>
            </>
          ))}
        </section>
      </div>
    </>
  );
};
export default ShopPage;
