import React from "react";
import { DateRangePicker } from "react-date-range";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// ...

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: "29.9854° N", lng: "31.1331° E" }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

// ...

function HotelMapsCal() {
  // ...

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  // ...

  return (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      {/* ... */}
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      {/* ... */}
    </div>
  );
}

export default HotelMapsCal;
