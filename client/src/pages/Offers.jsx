import React from "react";
import Navbar from "../components/Navbar";

function Offers() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"#0f0f0f",
      color:"white",
      padding:"150px 8%"
    }}>

      <Navbar />

      <h1>Offers Page</h1>

      <p>
        Users can negotiate and counter-offer here.
      </p>

    </div>
  );
}

export default Offers;