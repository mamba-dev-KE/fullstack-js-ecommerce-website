import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

const Home = () => {
  const { products, isLoading, isError, errorMessage } = useSelector(
    (store) => store.products
  );

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
