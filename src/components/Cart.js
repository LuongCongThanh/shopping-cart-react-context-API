import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Colors from "./Colors";
import { DataContext } from "./DataProvider";
import Sizes from "./Sizes";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.count);
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);


  const reduction = (id) => {
    cart.forEach(item => {
      if (item._id === id){
        item.count === 1 ?  item.count = 1 : item.count-=1;
      }
    });
    setCart([...cart])
  }
  const increase = (id) => {
    cart.forEach(item => {
      if (item._id === id){
        item.count += 1;
      }
    });
    setCart([...cart])
  }
  const removeProduct = (id) => {
    if(window.confirm("Do you want to delete this product ?")) {
      cart.forEach((item , index) => {
        if (item._id === id){
          cart.splice(index, 1)
        }
      });
      setCart([...cart]);
    }
  }

  const imgDiv = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageX - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <div className="details cart" key={product._id}>
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${product.images[0]})` }}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>

            <div className="amount">
              <button className="amount" onClick={()=>reduction(product._id)}> - </button>
              <span>{product.count}</span>
              <button className="amount" onClick={()=>increase(product._id)}> + </button>
            </div>

            <div className="delete" onClick={()=>removeProduct(product._id)}>X</div>
          </div>
        </div>
      ))}
      <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total: ${total}</h3>
      </div>
    </>
  );
}
