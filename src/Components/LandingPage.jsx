import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <h2>LandingPage</h2>
      <button onClick={() => navigate("/home")} className="btn btn-info">
        to Home
      </button>
    </>
  );
}
