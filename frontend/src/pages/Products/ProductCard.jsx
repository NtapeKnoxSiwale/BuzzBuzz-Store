import { Rating } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="ProductCard" to={`/product/${product._id}`}>
      <img
        src={product.images[0].url}
        alt={product.name}
        className="ProductImg"
      />
      <p className="ProductName">{product.name}</p>
      <div>
        {/* <Rating {...options} /> */}
        <span className="ProductReview">({product.numOfReviews} Reviews)</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="offer__price-box">
          <h1
            className="discountPrice"
            style={{
              paddingLeft: "2.5vmax",
              fontSize: ".9vmax",
              paddingBottom: "0",
            }}>
            {product.offerPrice > 0 ? `K ${product.offerPrice}` : ""}
          </h1>
          <span className="p__price">{`K ${product.price}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
