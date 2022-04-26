const Product = ({ _id, image, name, price }) => {
  return (
    <aside className="card">
      <a href={`/product/${_id}`}>
        <img className="medium" src={image} alt={name} />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{name}</h2>
        </a>
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="price">${price}</div>
      </div>
    </aside>
  );
};

export default Product;
