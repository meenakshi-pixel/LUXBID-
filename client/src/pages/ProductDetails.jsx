import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import CounterOffer from "../components/CounterOffer";
import NegotiationTimeline
from "../components/NegotiationTimeline";

function ProductDetails() {
  

  const { id } = useParams();


  const products = [
    {
      id:1,
      name:"Luxury Watch",
      price:"25,000",
      image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      description:
      "Premium luxury watch for elite lifestyle."
    },

    {
      id:2,
      name:"Gaming Laptop",
      price:"85,000",
      image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      description:
      "High performance laptop for creators and gamers."
    },

    {
      id:3,
      name:"iPhone 15 Pro",
      price:"1,20,000",
      image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      description:
      "Latest Apple flagship with premium features."
    }
  ];

  const product = products.find(
    (item)=>item.id === Number(id)
  );

  return (
    
    <div
      style={{
        background:"#0f0f0f",
        color:"white",
        minHeight:"100vh"
      
      }}
      
    >

      <Navbar />

      <div
        style={{
          padding:"150px 8%",
          display:"flex",
          gap:"60px",
          alignItems:"center",
          flexWrap:"wrap"
        }}
      >

        <img
          src={product.image}
          alt={product.name}
          style={{
            width:"450px",
            borderRadius:"20px"
          }}
        />

        <div>

          <h1
            style={{
              fontSize:"4rem",
              marginBottom:"20px"
            }}
          >
            {product.name}
          </h1>

          <h2
            style={{
              color:"#06b6d4",
              marginBottom:"20px"
            }}
          >
            ₹ {product.price}
          </h2>

          <p
            style={{
              maxWidth:"500px",
              lineHeight:"1.8"
            }}
          >
            {product.description}
          </p>

          <button
            style={{
              marginTop:"30px",
              padding:"18px 40px",
              border:"none",
              borderRadius:"40px",
              background:
              "linear-gradient(135deg,#7c3aed,#06b6d4)",
              color:"white",
              cursor:"pointer"
            }}
          >
            Make Offer
          </button>
          <CounterOffer />

<NegotiationTimeline />

        </div>

      </div>

    </div>
    
  );
}
export default ProductDetails;