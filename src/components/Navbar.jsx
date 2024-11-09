// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav>
      <h1>Quiz App</h1>
      <Link to="/">Home</Link>
      {currentUser ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/quiz">Quiz</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
