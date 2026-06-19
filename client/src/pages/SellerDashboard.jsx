import React from "react";

import Navbar from "../components/Navbar";

function SellerDashboard() {

  const stats = [
    {
      title: "Total Sales",
      value: "₹ 8,50,000"
    },

    {
      title: "Products",
      value: "124"
    },

    {
      title: "Offers",
      value: "58"
    },

    {
      title: "Customers",
      value: "342"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "150px 8%"
      }}
    >

      <Navbar />

      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "50px"
        }}
      >
        Seller Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px"
        }}
      >

        {stats.map((item,index)=>(

          <div
            key={index}
            style={{
              background:
                "rgba(255,255,255,0.08)",
              padding: "40px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)"
            }}
          >

            <h2
              style={{
                marginBottom: "15px"
              }}
            >
              {item.title}
            </h2>

            <h1
              style={{
                color: "#06b6d4"
              }}
            >
              {item.value}
            </h1>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SellerDashboard;