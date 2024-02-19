// HotelDetails.js
import React from "react";
import "./HotelDetails.css";
function HotelDetails({ hotel }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{hotel.name}</h1>
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-2">
        <strong>Location:</strong> {hotel.location}
      </p>
      <p className="mb-2">
        <strong>Price:</strong> ${hotel.price}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {hotel.rating}
      </p>
      <h2 className="text-xl font-bold mb-2">Amenities:</h2>
      <ul>
        {hotel.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}

export default HotelDetails;
