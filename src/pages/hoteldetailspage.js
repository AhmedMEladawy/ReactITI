import React from "react";
import { useParams } from "react-router-dom";
import { exploreData } from "../data"; // adjust the path as needed
import Header from "../components/Header"; // adjust the path as needed
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HotelMapsCal from "../components/GoogleMaps";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from "../components/GoogleMaps2";
import ReviewComponent from "../components/review/Review";
import Footer from "../components/Footer";

function HotelDetailsPage() {
  const { id } = useParams();
  const hotel = exploreData.find((hotel) => hotel.id === Number(id));

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const priceStyle = {
    color: "#FF5A5F", // Airbnb's pink color
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      <Header />
      <h1 style={titleStyle}>{hotel.title}</h1>
      <p>{hotel.location}</p>
      <Carousel>
        {hotel.images.map((image, index) => (
          <div key={index}>
            <div className="imagecar">
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "75%", height: "75%" }}
              />
            </div>
          </div>
        ))}
      </Carousel>

      <p>Guests: {hotel.guests}</p>
      <p>Bedrooms: {hotel.bedrooms}</p>
      <p>Beds: {hotel.beds}</p>
      <p>Bathrooms: {hotel.bathrooms}</p>
      <p>Amenities: {hotel.amenities.join(", ")}</p>
      <p>Description: {hotel.description}</p>
      {/* <h2>Reviews</h2>
      {hotel.reviews.map((review, index) => (
        <div key={index}>
          <p>{review.name}</p>
          <p>{review.date}</p>
          <p>{review.comments}</p>
        </div>
      ))}
      <h2>Host</h2>
      <p>{hotel.host.name}</p>
      <img src={hotel.host.image} alt={hotel.host.name} />
      <p>Response rate: {hotel.host.responseRate}</p>
      <p>Bio: {hotel.host.bio}</p> */}
      <p style={priceStyle}>{hotel.price}</p>
      {/* Add the rest of the components (Availability Calendar, Location Map, Footer) here */}
      <HotelMapsCal />
      <ReviewComponent />
      <Footer />
    </div>
  );
}

export default HotelDetailsPage;
