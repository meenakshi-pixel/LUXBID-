import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">
        LuxBid
      </h1>

      <ul className="nav-links">
        <li>
  <Link to="/seller-dashboard">
    Seller
  </Link>
</li>

<li>
  <Link to="/notifications-page">
    Notifications
  </Link>
</li>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/offers">Offers</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

      </ul>

      <Link to="/login">
        <button className="login-btn">
          Login
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;