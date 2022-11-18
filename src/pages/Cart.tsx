import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import Card from "../core/Card";
// import storeItems from "../data/items.json"

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getNews();
}, []);


const getNews = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();
    setProducts(data.products)
    
    }
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {products.map((product: {
        title: string;
            id: number;

            thumbnail: string; name: string | undefined; images: (string | undefined)[]; price: number; }) => (
            <>
                <StoreItem name={product.title} imgUrl={product.thumbnail} price={product.price} id={product.id}/>
            </>
          ))}
      </Row>
    </>
  )
}