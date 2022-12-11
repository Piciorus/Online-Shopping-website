import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../core/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import "../index.css";
import Header from "./Header";
import { Image } from "../core/Image";
import Card from "../core/Card";
import Pagination from "../core/Pagination";

const ShopPage: React.FC = () => {
  const user = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  useEffect(() => {
    getTopics();
  }, [page]);

  const getTopics = async (category?: string) => {
    const response = await fetch(
      "https://dummyjson.com/products/category" + category !== undefined ||
        category !== "" ||
        category !== null
        ? `/${category}`
        : ""
    );
    const data = await response.json();
    setTopics(data);
  };

  return (
    <>
      <div className="mainhome">
        <video autoPlay loop muted className="video">
          {/* <source src={require("../image/video.mp4")} type="video/mp4" /> */}
        </video>
        <Header />
        <section className="photo-grid-container">
          {topics.map(
            (product: {
              id: number;
              thumbnail: string | undefined;
              title: string | undefined;
              images: (string | undefined)[];
              category: string;
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
