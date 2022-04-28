import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import MessageBox from "../components/MessageBox";
import { useEffect } from "react";
import { getProductDetails } from "../app/features/productDetailsSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { product, isLoading, isError, errorMessage } = useSelector(
    (store) => store.productDetails
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  const { image, name, price, rating, description, numReviews, countInStock } =
    product;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <MessageBox variant="danger" {...errorMessage}>
          {errorMessage}
        </MessageBox>
      ) : (
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
      )}
    </div>
  );
};

export default ProductDetails;
