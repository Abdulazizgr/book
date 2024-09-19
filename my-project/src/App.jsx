import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import "./App.css"; // Optional: Global styles
import Home from "./pages/Home.jsx";
import Reviews from "./pages/Reviews.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import BookDetailPage from "./pages/BookDetailsPage.jsx";


const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Define routes for the different pages */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookdetailspage" element={<BookDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
