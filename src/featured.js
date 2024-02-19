// // Featured.js
// import React from "react";
// import { featuredData } from "./data";

// function Featured() {
//   return (
//     <section className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Featured destinations</h2>
//       <div className="grid grid-cols-4 gap-4">
//         {featuredData.map((destination, index) => (
//           <div key={index} className="border rounded overflow-hidden">
//             <img
//               className="w-full h-64 object-cover"
//               src={destination.image}
//               alt={destination.title}
//             />
//             <div className="p-3">
//               <h3 className="font-bold text-xl">{destination.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Featured;

// Featured.js
import React from "react";
import Card from "./components/Card";
import { featuredData } from "./data";

function Featured() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured destinations</h2>
      <div className="grid grid-cols-4 gap-4">
        {featuredData.map((destination, index) => (
          <Card key={index} item={destination} />
        ))}
      </div>
    </section>
  );
}

export default Featured;
