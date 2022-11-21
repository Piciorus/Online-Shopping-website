import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { IconCart } from "../image/icons";
import Button from "./Button";
import "./Card.css";


interface Props {
  title?: string;
  imageUrl?: string;
  body: number;
  id: number;
  rating?: number;
  discountPercentage: number;

}

export const Card: React.FC<Props> = ({ id,title, imageUrl, body,rating,discountPercentage }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)
  var result = (body.valueOf()+((discountPercentage.valueOf()/100) * body.valueOf())).toFixed(2) ;

  return (
    <div className="card-container">
      <div className="image_container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="ratingstar">
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
        {rating}</div>
        <div className="discount">{result}€</div>
        <div className="group">
          <div className="card-body">
            <p>{body}€</p>
          </div>
          <div className="btnicon ">
            <Button
              size="small"
              variant="icon"
              backgroundColor="dark"
              onClick={() => increaseCartQuantity(id)}
              icon={<IconCart />}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
