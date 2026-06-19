import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  addToCart
}) {

  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      style={{
        width: "320px",
        background:
          "rgba(255,255,255,0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "0.4s",
      }}
    >

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
        }}
        onClick={() =>
          navigate(`/product/${product.id}`)
        }
      />

      <div
        style={{
          padding: "25px",
          color: "white",
        }}
      >

        <h2>{product.name}</h2>

        <p
          style={{
            margin: "15px 0",
            color: "#06b6d4",
          }}
        >
          ₹ {product.price}
        </p>

        <button
          onClick={() =>
            addToCart(product)
          }
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#7c3aed,#06b6d4)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;