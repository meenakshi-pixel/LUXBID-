import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

function Home() {

  const products = [
    {
      id:1,
      name:"Luxury Watch",
      price:"25,000",
      image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
    },

    {
      id:2,
      name:"Gaming Laptop",
      price:"85,000",
      image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
    },

    {
      id:3,
      name:"iPhone 15 Pro",
      price:"1,20,000",
      image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
    }
  ];

  return (
    <div>

      <Navbar />

      <HeroSection />

      <div className="products-section">

        {products.map((product)=>(
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;