import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import RecentlyReviewedBooks from "../components/RecentlyReviewedBooks";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Recently Reviewed Books Section */}
      <RecentlyReviewedBooks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
