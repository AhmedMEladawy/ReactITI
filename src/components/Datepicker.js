// // YourComponent.js
// import "react-datepicker/dist/react-datepicker.css";
// import "./Datepicker.css"; // Import your custom styles
// import DatePicker from "react-datepicker";
// import { useState } from "react";

// function DatePick() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   return (
//     <div className="airbnb-datepicker">
//       <div className="airbnb-datepicker__input-container">
//         <label>Check-in:</label>
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           selectsStart
//           startDate={startDate}
//           endDate={endDate}
//           className="airbnb-datepicker__input"
//           placeholderText="Select date"
//         />
//       </div>

//       <div className="airbnb-datepicker__input-container">
//         <label>Check-out:</label>
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           selectsEnd
//           startDate={startDate}
//           endDate={endDate}
//           minDate={startDate}
//           className="airbnb-datepicker__input"
//           placeholderText="Select date"
//         />
//       </div>
//     </div>
//   );
// }

// export default DatePick;

// YourComponent.js
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css"; // Import your custom styles
import DatePicker from "react-datepicker";
import { useState } from "react";

function DatePick() {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  const handleDateChange = (dates) => {
    setSelectedDateRange(dates);
  };

  return (
    <div className="airbnb-datepicker">
      <div className="airbnb-datepicker__input-container">
        <label>🔎</label>
        <DatePicker
          selected={selectedDateRange[0]}
          onChange={(date) => handleDateChange([date, selectedDateRange[1]])}
          selectsStart
          startDate={selectedDateRange[0]}
          endDate={selectedDateRange[1]}
          className="airbnb-datepicker__input"
          placeholderText="Select date range"
          range
        />
      </div>
    </div>
  );
}

export default DatePick;
