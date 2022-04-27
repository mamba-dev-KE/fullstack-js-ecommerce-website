import { useSelector } from "react-redux";
import Product from "../components/Product";

const Home = () => {
  const { products } = useSelector((store) => store.products);
  return (
    <div className="row center">
      {products.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Home;
