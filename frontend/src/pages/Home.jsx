import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import { getProducts } from "../app/features/products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { products, isLoading, isError, errorMessage } = useSelector(
    (store) => store.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <MessageBox variant="danger" {...errorMessage}>
          {errorMessage}
        </MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
