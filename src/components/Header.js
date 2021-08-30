import React, { useContext, useState } from "react";
import Menu from "./svg/bars.svg";
import Close from "./svg/times.svg";
import Cart from "./svg/cart.svg";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

function Header(props) {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/products">Citizen</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">login / Register</Link>
        </li>
        <li className="close" onClick={toggleMenu}>
          <img src={Close} alt="" width="20" />
        </li>
      </ul>
      <div className="menu" onClick={toggleMenu}>
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link to="/cart">
          <img src={Cart} alt="" width="30" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
