import React, { useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import OfferModal from "../components/OfferModal";
import CartSidebar from "../components/CartSidebar";

function Products() {

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [selectedProduct,
    setSelectedProduct] =
    useState(null);

  const [cart, setCart] =
    useState([]);

  const [showCart,
    setShowCart] =
    useState(false);

  const products = [
    {
      id: 1,
      name: "Luxury Watch",
      price: "25000",
      category: "Luxury",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },

    {
      id: 2,
      name: "Gaming Laptop",
      price: "85000",
      category: "Gaming",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },

    {
      id: 3,
      name: "iPhone 15 Pro",
      price: "120000",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        padding: "150px 8%",
      }}
    >

      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >

        <h1
          style={{
            color: "white",
            marginBottom: "40px",
            fontSize: "3rem",
          }}
        >
          Explore Products
        </h1>

        <button
          onClick={() =>
            setShowCart(true)
          }
          style={{
            padding: "15px 25px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#7c3aed,#06b6d4)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Cart ({cart.length})
        </button>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        setCategory={setCategory}
      />

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            onDoubleClick={() =>
              setSelectedProduct(product)
            }
          >

            <ProductCard
              product={product}
              addToCart={addToCart}
            />

          </div>

        ))}

      </div>

      {selectedProduct && (

        <OfferModal
          product={selectedProduct}
          closeModal={() =>
            setSelectedProduct(null)
          }
        />

      )}

      {showCart && (

        <CartSidebar
          cart={cart}
          closeCart={() =>
            setShowCart(false)
          }
        />

      )}

    </div>
  );
}

export default Products;