import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>🌿 Paradise Nursery</h1>

      <p style={{ maxWidth: "600px", fontSize: "1.2rem" }}>
        Welcome to Paradise Nursery, your one-stop destination for beautiful
        and healthy houseplants. We bring nature closer to your home with love
        and care.
      </p>

      <button
        onClick={() => navigate("/products")}
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          marginTop: "20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

// Dummy Products Page
function Products() {
  return <h2 style={{ color: "white", textAlign: "center" }}>Products Page</h2>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
