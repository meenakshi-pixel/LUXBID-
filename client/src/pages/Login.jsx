import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email && password) {

      navigate("/");

    } else {

      alert("Please fill all fields");

    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",

        backgroundImage:
          "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        position: "relative",

        overflow: "hidden",

        fontFamily: "sans-serif"
      }}
    >

      {/* DARK OVERLAY */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))"
        }}
      />

      {/* SUNSET GLOW */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "rgba(255,140,0,0.25)",
          filter: "blur(120px)",
          top: "-150px",
          right: "-150px",
          animation: "float 8s ease-in-out infinite"
        }}
      />

      {/* LOGIN CARD */}

      <div
        style={{
          width: "420px",

          padding: "50px",

          borderRadius: "30px",

          background:
            "rgba(255,255,255,0.08)",

          border:
            "1px solid rgba(255,255,255,0.15)",

          backdropFilter: "blur(20px)",

          boxShadow:
            "0 0 40px rgba(0,0,0,0.5)",

          zIndex: 10,

          color: "white",

          animation: "fadeUp 1s ease"
        }}
      >

        <h1
          style={{
            fontSize: "3.5rem",

            textAlign: "center",

            marginBottom: "10px",

            fontWeight: "800",

            letterSpacing: "2px"
          }}
        >
          LuxBid
        </h1>

        <p
          style={{
            textAlign: "center",

            marginBottom: "40px",

            color:
              "rgba(255,255,255,0.75)"
          }}
        >
          B2B Marketplace
        </p>

        <input
          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

          style={{
            width: "100%",

            padding: "18px",

            marginBottom: "20px",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,0.15)",

            background:
              "rgba(255,255,255,0.08)",

            color: "white",

            outline: "none",

            fontSize: "1rem"
          }}
        />

        <input
          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          style={{
            width: "100%",

            padding: "18px",

            marginBottom: "30px",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,0.15)",

            background:
              "rgba(255,255,255,0.08)",

            color: "white",

            outline: "none",

            fontSize: "1rem"
          }}
        />

        <button
          onClick={handleLogin}

          style={{
            width: "100%",

            padding: "18px",

            border: "none",

            borderRadius: "14px",

            background:
              "linear-gradient(135deg,#ff7b00,#ff006e)",

            color: "white",

            fontSize: "1rem",

            fontWeight: "700",

            cursor: "pointer",

            transition: "0.4s"
          }}
        >
          Enter Marketplace
        </button>

      </div>

      <style>
        {`

          @keyframes fadeUp {

            from {
              opacity: 0;
              transform:
                translateY(50px);
            }

            to {
              opacity: 1;
              transform:
                translateY(0);
            }

          }

          @keyframes float {

            0% {
              transform:
                translateY(0px);
            }

            50% {
              transform:
                translateY(30px);
            }

            100% {
              transform:
                translateY(0px);
            }

          }

          input::placeholder {

            color:
              rgba(255,255,255,0.6);

          }

        `}
      </style>

    </div>
  );
}

export default Login;