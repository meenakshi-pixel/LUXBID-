import React from "react";

function CartSidebar({ cart, closeCart }) {

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "350px",
        height: "100vh",
        background: "#121212",
        padding: "30px",
        color: "white",
        zIndex: 1000,
        overflowY: "auto",
      }}
    >

      <h2
        style={{
          marginBottom: "30px",
        }}
      >
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p>No products added.</p>
      ) : (

        cart.map((item) => (

          <div
            key={item.id}
            style={{
              marginBottom: "25px",
              borderBottom:
                "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "20px",
            }}
          >

            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <h3
              style={{
                marginTop: "10px",
              }}
            >
              {item.name}
            </h3>

            <p>₹ {item.price}</p>

          </div>

        ))

      )}

      <button
        onClick={closeCart}
        style={{
          width: "100%",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          background:
            "linear-gradient(135deg,#7c3aed,#06b6d4)",
          color: "white",
          cursor: "pointer",
        }}
      >
        Close Cart
      </button>

    </div>
  );
}

export default CartSidebar;