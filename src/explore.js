// Explore.js
import React from "react";
import Slider from "react-slick";
import Card from "./components/Card";
import { exploreData } from "./data";

function Explore() {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 2,
  //     slidesToScroll: 2,
  //   };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Explore</h2>
      <div className="grid grid-cols-4 gap-4">
        {exploreData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Explore;
