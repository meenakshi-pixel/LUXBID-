import React, { useState } from "react";

function OfferModal({ product, closeModal }) {
  const [offer, setOffer] = useState("");

  const submitOffer = () => {
    alert(`Offer ₹${offer} submitted for ${product.name}`);
    closeModal();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
      style={{
          width: "400px",
          background: "#1e1e1e",
          padding: "40px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <h2>Make Offer</h2>

        <input
          type="number"
          placeholder="Enter your offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />
<button
          onClick={submitOffer}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
            color: "white",
          }}
        >
          Submit Offer
        </button>
      </div>
    </div>
  );
}

export default OfferModal;