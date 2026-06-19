import React from "react";
import Navbar from "../components/Navbar";

export default function NotificationsPage() {
  const notifications = [
    "Your offer for iPhone 15 Pro was accepted.",
    "Counter offer received for Gaming Laptop.",
    "Luxury Watch added to cart.",
    "New seller message received.",
    "Offer negotiation updated successfully."
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      color: "white",
    }}>
      
      <Navbar />

      {/* Spacer - matches navbar height (padding 25px + content ~40px = ~90px) */}
      <div style={{ height: "90px" }} />

      <main style={{ padding: "40px 8%" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
          🔔 Notifications
        </h1>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>
          {notifications.map((note, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "15px 20px",
                borderRadius: "10px",
                fontSize: "16px",
                borderLeft: "4px solid #06b6d4",
                transition: "all 0.2s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {note}
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}