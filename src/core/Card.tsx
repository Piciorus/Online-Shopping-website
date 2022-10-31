import React from "react";
import './Card.css';

interface Props {
  title: string;
  imageUrl: string;
  body: string;
}

export const Card: React.FC<Props> = ({
  title,
  imageUrl,
  body,
}) => {
    return (
        <div className="card-container">
          <div className="image-container">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-body">
              <p>{body}</p>
            </div>
          </div>
          <div className="btn">
            <button>
              <a>Read More</a></button>
          </div>
        </div>
    )
}

export default Card