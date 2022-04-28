import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

const ProductDetails = () => {
  const { products } = useSelector((store) => store.products);

  const { id } = useParams();

  const product = products.find((item) => item._id === id);

  const { image, name, price, rating, description, numReviews, countInStock } =
    product;

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <Link to="/">Back to Results</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={image} alt={name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{name}</h1>
            </li>
            <li>
              <Rating rating={rating} numReviews={numReviews} />
            </li>
            <li>Price : ${price}</li>
            <li>
              Description: <p>{description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button type="button" className="primary block">
                  Add to Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
