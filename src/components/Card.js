// Card.js
import React from "react";
import Slider from "react-slick";
import "./Card.css";
import StarRatings from "react-star-ratings";
import { exportData } from "../data";

function Card({ item, sliderSettings, showButtons, showRating }) {
  return (
    <div className="border rounded overflow-hidden">
      <Slider {...sliderSettings}>
        {[item.image].map((image, imageIndex) => (
          <div key={imageIndex}>
            <img
              className="w-full h-64 object-cover"
              src={image}
              alt={`Slide ${imageIndex}`}
            />
          </div>
        ))}
      </Slider>

      <div className="p-3">
        <h3 className="font-bold text-xl">{item.title}</h3>
        <p>{item.location}</p>
        <p>${item.price}</p>
        {showRating && (
          <StarRatings
            rating={item.rating}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
        )}
        {showButtons && (
          <div className="flex justify-between">
            <button className="airbnb-button">Inquiry</button>
            <button className="airbnb-button">Book Now</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
