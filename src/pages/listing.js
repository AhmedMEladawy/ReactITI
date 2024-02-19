// // Listing.js
// import React, { useState } from "react";
// import { exploreData } from "../data";
// import Header from "../components/Header";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./listing.css";
// import Card from "../components/Card";

// function Listing() {
//   const [locationFilter, setLocationFilter] = useState("");
//   const [priceFilter, setPriceFilter] = useState("");
//   const [ratingFilter, setRatingFilter] = useState("");
//   const [amenitiesFilter, setAmenitiesFilter] = useState([]);

//   const amenitiesOptions = ["Pool", "Gym", "Free breakfast", "Pet-friendly"];

//   const filteredData = exploreData.filter((item) => {
//     return (
//       (locationFilter === "" ||
//         item.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
//       (priceFilter === "" || item.price <= priceFilter) &&
//       (ratingFilter === "" || item.rating >= ratingFilter) &&
//       (amenitiesFilter.length === 0 ||
//         (Array.isArray(item.amenities) &&
//           amenitiesFilter.every((amenity) => item.amenities.includes(amenity))))
//     );
//   });

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="p-4">
//       <Header />

//       <div className="flex">
//         <div className="w-64 mr-4">
//           <h2 className="mb-4 font-bold text-lg">Filters</h2>

//           <label>
//             Location:
//             <input
//               type="text"
//               value={locationFilter}
//               onChange={(e) => setLocationFilter(e.target.value)}
//             />
//           </label>

//           <label>
//             Max Price:
//             <input
//               type="number"
//               value={priceFilter}
//               onChange={(e) => setPriceFilter(e.target.value)}
//             />
//           </label>

//           <label>
//             Min Rating:
//             <input
//               type="number"
//               value={ratingFilter}
//               onChange={(e) => setRatingFilter(e.target.value)}
//             />
//           </label>

//           <fieldset>
//             <legend>Amenities:</legend>
//             {amenitiesOptions.map((amenity) => (
//               <label key={amenity}>
//                 <input
//                   type="checkbox"
//                   value={amenity}
//                   checked={amenitiesFilter.includes(amenity)}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setAmenitiesFilter((prev) => [...prev, amenity]);
//                     } else {
//                       setAmenitiesFilter((prev) =>
//                         prev.filter((a) => a !== amenity)
//                       );
//                     }
//                   }}
//                 />
//                 {amenity}
//               </label>
//             ))}
//           </fieldset>
//         </div>

//         <div className="flex-grow">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredData.map((item, index) => (
//               <Card key={index} item={item} showButtons={true} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Listing;

// Listing.js
import React, { useState } from "react";
import { exploreData } from "../data";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listing.css";
import Card from "../components/Card";
import Filter from "../components/Filter";

function Listing() {
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);

  const amenitiesOptions = ["Pool", "Gym", "Free breakfast", "Pet-friendly"];

  const filteredData = exploreData.filter((item) => {
    return (
      (locationFilter === "" ||
        item.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (priceFilter === "" || item.price <= priceFilter) &&
      (ratingFilter === "" || item.rating >= ratingFilter) &&
      (amenitiesFilter.length === 0 ||
        (Array.isArray(item.amenities) &&
          amenitiesFilter.every((amenity) => item.amenities.includes(amenity))))
    );
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="p-4">
      <Header />

      <div className="flex">
        <Filter
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          amenitiesFilter={amenitiesFilter}
          setAmenitiesFilter={setAmenitiesFilter}
          amenitiesOptions={amenitiesOptions}
        />

        {/* <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((item, index) => (
              <Card key={index} item={item} showButtons={true} />
            ))}
          </div>
        </div> */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((item, index) => (
              <Card
                key={index}
                item={item}
                showButtons={true}
                showRating={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listing;
