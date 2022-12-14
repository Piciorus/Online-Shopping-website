import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import Card from "../core/Card";

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");

    const data = await response.json();
    setProducts(data.products);
  };

  return (
    <>
      <div className="mainhome">
        <video autoPlay loop muted className="video">
          {/* <source src={require("../image/video.mp4")} type="video/mp4" /> */}
        </video>
        <Header />
        <section className="photo-grid-container">
          {products.map(
            (product: {
              id: number;
              thumbnail: string | undefined;
              title: string | undefined;
              images: (string | undefined)[];
              price: number;
              rating: number | undefined;
              discountPercentage: number;
            }) => (
              <>
                <Card
                  title={product.title}
                  imageUrl={product.thumbnail}
                  body={product.price}
                  id={product.id}
                  rating={product.rating}
                  discountPercentage={product.discountPercentage}
                />
              </>
            )
          )}
        </section>
      </div>
    </>
  );
};
export default ShopPage;
