import React from "react";
import { auth } from './firebase'; // Always import Firebase configuration first

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import QuizPage from "./components/QuizPage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={ProfilePage} />}
          />
          <Route path="/quiz" element={<PrivateRoute component={QuizPage} />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
