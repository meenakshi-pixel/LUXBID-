import React from "react";

import Navbar from "../components/Navbar";

function AdminPanel() {

  const users = [
    "Meenakshi",
    "Rahul",
    "Arjun",
    "Kiran"
  ];

  return (
    <div
      style={{
        minHeight:"100vh",
        background:"#0f0f0f",
        color:"white",
        padding:"150px 8%"
      }}
    >

      <Navbar />

      <h1
        style={{
          marginBottom:"40px",
          fontSize:"3rem"
        }}
      >
        Admin Panel
      </h1>

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"20px"
        }}
      >

        {users.map((user,index)=>(

          <div
            key={index}
            style={{
              background:
              "rgba(255,255,255,0.08)",

              padding:"25px",

              borderRadius:"15px"
            }}
          >

            {user}

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminPanel;