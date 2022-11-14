import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import "../index.css";
import Header from "./Header";
import { Image } from "../core/Image";
import Card from "../core/Card";

const ShopPage: React.FC = () => {
  const user = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    getNews();
}, []);


const getNews = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();
    setProducts(data.products)
    
    }

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <div className="mainhome">
        <video autoPlay loop muted className="video">
          {/* <source src={require("../image/video.mp4")} type="video/mp4" /> */}
        </video>
        <Header/>
        <section className="photo-grid-container">
          {products.map((product: {
            id: number;
            thumbnail: string | undefined; title: string | undefined; images: (string | undefined)[]; price: string | undefined; }) => (
            <>
                <Card title={product.title} imageUrl={product.thumbnail} body={product.price} id={product.id}/>
            </>
          ))}
        </section>
      </div>
    </>
  );
};
export default ShopPage;
