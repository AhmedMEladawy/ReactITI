// // Filter.js
// import React from "react";

// function Filter({
//   locationFilter,
//   setLocationFilter,
//   priceFilter,
//   setPriceFilter,
//   ratingFilter,
//   setRatingFilter,
//   amenitiesFilter,
//   setAmenitiesFilter,
//   amenitiesOptions,
// }) {
//   return (
//     <div className="w-64 mr-4">
//       <h2 className="mb-4 font-bold text-lg">Filters</h2>

//       <label>
//         Location:
//         <input
//           type="text"
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//         />
//       </label>

//       <label>
//         Max Price:
//         <input
//           type="number"
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//         />
//       </label>

//       <label>
//         Min Rating:
//         <input
//           type="number"
//           value={ratingFilter}
//           onChange={(e) => setRatingFilter(e.target.value)}
//         />
//       </label>

//       <fieldset>
//         <legend>Amenities:</legend>
//         {amenitiesOptions.map((amenity) => (
//           <label key={amenity}>
//             <input
//               type="checkbox"
//               value={amenity}
//               checked={amenitiesFilter.includes(amenity)}
//               onChange={(e) => {
//                 if (e.target.checked) {
//                   setAmenitiesFilter((prev) => [...prev, amenity]);
//                 } else {
//                   setAmenitiesFilter((prev) =>
//                     prev.filter((a) => a !== amenity)
//                   );
//                 }
//               }}
//             />
//             {amenity}
//           </label>
//         ))}
//       </fieldset>
//     </div>
//   );
// }

// export default Filter;

// Filter.js
import React from "react";
import "./Filter.css"; // Import your custom styles

function Filter({
  locationFilter,
  setLocationFilter,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  amenitiesFilter,
  setAmenitiesFilter,
  amenitiesOptions,
}) {
  return (
    <div className="airbnb-filter w-64 mr-4">
      <h2 className="mb-4 font-bold text-lg">Filters</h2>

      <label>
        Location:
        <input
          type="text"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
      </label>

      <label>
        Max Price:
        <input
          type="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </label>

      <label>
        Min Rating:
        <input
          type="number"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </label>

      <fieldset>
        <legend>Amenities:</legend>
        {amenitiesOptions.map((amenity) => (
          <label key={amenity}>
            <input
              type="checkbox"
              value={amenity}
              checked={amenitiesFilter.includes(amenity)}
              onChange={(e) => {
                if (e.target.checked) {
                  setAmenitiesFilter((prev) => [...prev, amenity]);
                } else {
                  setAmenitiesFilter((prev) =>
                    prev.filter((a) => a !== amenity)
                  );
                }
              }}
            />
            {amenity}
          </label>
        ))}
      </fieldset>
    </div>
  );
}

export default Filter;
