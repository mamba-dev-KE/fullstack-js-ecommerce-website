import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ _id, image, name, price, rating, numReviews }) => {
  return (
    <aside className="card">
      <Link to={`/product/${_id}`}>
        <img className="medium" src={image} alt={name} />
      </Link>
      <div className="card-body">
        <a href="product.html">
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </aside>
  );
};

export default Product;
