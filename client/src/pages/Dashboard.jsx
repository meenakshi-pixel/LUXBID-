import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/dashboard")
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ color: "white", padding: "50px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      color: "white",
      padding: "50px"
    }}>

      <Navbar />

      <h1>📊 Dashboard</h1>

      <div style={{ marginTop: "30px" }}>
        <h2>Sales</h2>
        <p>{stats?.sales}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Offers</h2>
        <p>{stats?.offers}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Products</h2>
        <p>{stats?.products}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Notifications</h2>

        {stats?.notifications?.map((item, index) => (
          <p key={index}>🔔 {item}</p>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;