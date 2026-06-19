import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "40px",
      }}
    >
      <input
        type="text"
        placeholder="Search premium products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "15px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          fontSize: "1rem",
          outline: "none",
        }}
      />
          </div>
  );
}

export default SearchBar;