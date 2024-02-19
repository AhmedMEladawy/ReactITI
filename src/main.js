// MainContent.js
import React from "react";

function MainContent() {
  return (
    <main className="p-5">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {/* Repeat this section for each property */}
        <div className="border rounded overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/200"
            alt="Property"
          />
          <div className="p-3">
            <h2 className="font-bold text-xl">Property Title</h2>
            <p>Property description</p>
          </div>
        </div>
        {/* End of property section */}
      </div>
    </main>
  );
}

export default MainContent;
