import React from "react";

function FilterBar({ setCategory }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "40px",
        flexWrap: "wrap",
      }}
    >
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Luxury")}>Luxury</button>
      <button onClick={() => setCategory("Gaming")}>Gaming</button>
    </div>
  );
}

export default FilterBar;