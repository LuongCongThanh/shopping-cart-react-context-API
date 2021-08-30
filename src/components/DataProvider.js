import React, { createContext, useEffect, useState } from "react";
import Clock01 from "./svg/clock_1.jpg";
import Clock02 from "./svg/clock_2.jpg";
import Clock03 from "./svg/clock_3.jpg";
import Clock04 from "./svg/clock_4.jpg";
import Clock05 from "./svg/clock_5.jpg";
import Clock06 from "./svg/clock_6.jpg";
import Clock07 from "./svg/clock_7.jpg";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "watch Product 01",
      images: [Clock01, Clock02, Clock03, Clock04, Clock05, Clock06, Clock07],
      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome ",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
    {
      _id: "2",
      title: "watch Product 02",
      images: [Clock02, Clock01, Clock03, Clock04, Clock05, Clock06, Clock07],

      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
    {
      _id: "3",
      title: "watch Product 03",
      images: [Clock03, Clock02, Clock01, Clock04, Clock05, Clock06, Clock07],

      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
    {
      _id: "4",
      title: "watch Product 04",
      images: [Clock04, Clock02, Clock03, Clock01, Clock05, Clock06, Clock07],

      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
    {
      _id: "5",
      title: "watch Product 05",
      images: [Clock05, Clock02, Clock03, Clock04, Clock01, Clock06, Clock07],

      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
    {
      _id: "6",
      title: "watch Product 06",
      images: [Clock06, Clock02, Clock03, Clock04, Clock05, Clock01, Clock07],

      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
    {
      _id: "7",
      title: "watch Product 07",
      images: [Clock07, Clock02, Clock03, Clock04, Clock05, Clock06, Clock01],

      description: " Thanh handsome and very handsome Thanh handsome and very handsome  Thanh handsome and very handsome Thanh handsome and very handsome",
      content:
        "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
      price: 19,
      colors: ["red", "black", "crimson", "teal"],
      sizes: ["XL", "L", "M", "XXL"],
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the product has been added to cart.");
    }
  };
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
