import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Products(props) {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="products">
      {products.map((item) => (
        <div className="card" key={item._id}>
          <Link to={`/products/${item._id}`}>
            <img src={item.images[0]} alt="" />
          </Link>
          <div className="box">
            <h3 title="watch Product 01">
              <Link to={`/products/${item._id}`}>{item.title}</Link>
            </h3>
            <p>{item.description}{item.description}</p>
            <h4>${item.price}</h4>
            <button onClick={() => addCart(item._id)}>Add to card</button>
          </div>
        </div>
      ))}
    </div>
  );
}
