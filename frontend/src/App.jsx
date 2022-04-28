import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand" href="/">
              mamba
            </Link>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="row center">2020 All Rights Reserved</footer>
      </div>
    </Router>
  );
};

export default App;
