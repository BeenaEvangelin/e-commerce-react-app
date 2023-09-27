import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt="a shoe" className="card-img" />
      <div className="product-details">
        <h3 className="product-title">
          {title}
          <BsFillBagHeartFill />
        </h3>
      </div>
      <div className="product-rating">
        {star}
        {star}
        {star}
        {star}
        {star}
        <span>
          <strong>{reviews}</strong>
        </span>
      </div>
      <section className="card-price">
        <div>
          <h6>
            <del>{prevPrice}</del> {newPrice}
          </h6>
        </div>
      </section>
    </section>
  );
};

export default Card;
