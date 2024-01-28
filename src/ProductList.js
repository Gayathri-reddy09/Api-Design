import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setError("Invalid API response");
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-list-container">
      {products.map((product, index) => (
        <div key={index} className="product-card col-lg-4 col-md-6 col-sm-12">
          <img src={product.thumbnail} alt={product.title} className="card-image" />
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-description">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
export default ProductList;
