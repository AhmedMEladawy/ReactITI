// HomePage.js
import React from "react";
import Header from "../components/Header";
import Hero from "../hero";
import Explore from "../explore";
import Featured from "../featured";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <Explore />
      <Featured />
      <Footer />
    </div>
  );
}

export default HomePage;
