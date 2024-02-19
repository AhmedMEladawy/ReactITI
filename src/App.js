// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Listing from "./pages/listing";
import HotelDetails from "./components/HotelDetails";
import HotelDetailsPage from "./pages/hoteldetailspage";
import ReviewComponent from "./components/review/Review";
import RegisterLogin from "./pages/RegisterLogin/RegisterLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<Listing />} />{" "}
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        <Route path="/review" element={<ReviewComponent />} />{" "}
        {/* <Route path="/login" element={<RegisterLogin />} /> */}
        {/* Use the Listing component */}
      </Routes>
    </Router>
  );
}

export default App;
