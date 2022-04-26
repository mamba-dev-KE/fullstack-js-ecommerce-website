import Product from "./components/Product";
import data from "./data/data";

const App = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            mamba
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key="product._id" {...product} />
          ))}
        </div>
      </main>
      <footer className="row center">2020 All Rights Reserved</footer>
    </div>
  );
};

export default App;
