import React, { useState } from "react";

function CounterOffer() {

  const [buyerOffer, setBuyerOffer] =
    useState("");

  const [sellerCounter, setSellerCounter] =
    useState("");

  const [message, setMessage] =
    useState("");

  const sendOffer = () => {

    if (!buyerOffer) {
      alert("Enter buyer offer");
      return;
    }

    setMessage(
      `Seller countered with ₹${sellerCounter}`
    );
  };

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.08)",

        padding: "40px",

        borderRadius: "20px",

        color: "white",

        marginTop: "40px"
      }}
    >

      <h2
        style={{
          marginBottom: "30px"
        }}
      >
        Counter Offer System
      </h2>

      <input
        type="number"
        placeholder="Buyer Offer"
        value={buyerOffer}
        onChange={(e)=>
          setBuyerOffer(e.target.value)
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "none"
        }}
      />

      <input
        type="number"
        placeholder="Seller Counter Offer"
        value={sellerCounter}
        onChange={(e)=>
          setSellerCounter(e.target.value)
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "none"
        }}
      />

      <button
        onClick={sendOffer}
        style={{
          width: "100%",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          background:
            "linear-gradient(135deg,#7c3aed,#06b6d4)",
          color: "white",
          cursor: "pointer"
        }}
      >
        Send Counter Offer
      </button>

      {message && (

        <p
          style={{
            marginTop: "20px",
            color: "#06b6d4"
          }}
        >
          {message}
        </p>

      )}

    </div>
  );
}

export default CounterOffer;