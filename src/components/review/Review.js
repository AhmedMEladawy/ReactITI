// import React, { useState, useEffect } from "react";
// import { Rating } from "react-simple-star-rating";
// import "bootstrap/dist/css/bootstrap.min.css";

// function ReviewComponent() {
//   const [rating, setRating] = useState(loadRating());
//   const [reviewText, setReviewText] = useState(loadReview());
//   const [reviews, setReviews] = useState(loadReviews());

//   // Load from localStorage on component mount
//   useEffect(() => {
//     const storedRating = localStorage.getItem("rating");
//     const storedReview = localStorage.getItem("reviewText");
//     const storedReviews = localStorage.getItem("reviews");

//     if (storedRating) {
//       setRating(parseInt(storedRating, 10));
//     }
//     if (storedReview) {
//       setReviewText(storedReview);
//     }
//     if (storedReviews) {
//       setReviews(JSON.parse(storedReviews));
//     }
//   }, []);

//   // Save updates to localStorage
//   useEffect(() => {
//     localStorage.setItem("rating", rating);
//     localStorage.setItem("reviewText", reviewText);
//     localStorage.setItem("reviews", JSON.stringify(reviews));
//   }, [rating, reviewText, reviews]);

//   const handleRatingChange = (rate) => {
//     setRating(rate);
//   };

//   const handleReviewChange = (event) => {
//     setReviewText(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newReview = { rating: rating, text: reviewText };
//     setReviews([...reviews, newReview]);

//     console.log("Review:", reviewText);
//     console.log("Rating:", rating);

//     alert("Thank you for your review!");

//     setRating(0);
//     setReviewText("");
//   };

//   return (
//     <div className="review-container">
//       <h2>Leave a Review</h2>
//       <Rating onClick={handleRatingChange} ratingValue={rating} />
//       <textarea
//         placeholder="Write your review here..."
//         value={reviewText}
//         onChange={handleReviewChange}
//       />
//       <button onClick={handleSubmit}>Submit Review</button>

//       <h2>Submitted Reviews</h2>
//       {reviews.map((review, index) => (
//         <div key={index}>
//           <p>Rating: {review.rating}</p>
//           <p>Review: {review.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function loadRating() {
//   return localStorage.getItem("rating") || 0;
// }

// function loadReview() {
//   return localStorage.getItem("reviewText") || "";
// }

// function loadReviews() {
//   const storedReviews = localStorage.getItem("reviews");
//   return storedReviews ? JSON.parse(storedReviews) : [];
// }

// export default ReviewComponent;

// src/components/ReviewComponent.js
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Review.css";
function ReviewComponent() {
  const [rating, setRating] = useState(loadRating());
  const [reviewText, setReviewText] = useState(loadReview());
  const [reviews, setReviews] = useState(loadReviews());

  // Load from localStorage on component mount
  useEffect(() => {
    const storedRating = localStorage.getItem("rating");
    const storedReview = localStorage.getItem("reviewText");
    const storedReviews = localStorage.getItem("reviews");

    if (storedRating) {
      setRating(parseInt(storedRating, 10));
    }
    if (storedReview) {
      setReviewText(storedReview);
    }
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Save updates to localStorage
  useEffect(() => {
    localStorage.setItem("rating", rating);
    localStorage.setItem("reviewText", reviewText);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [rating, reviewText, reviews]);

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReview = { rating: rating, text: reviewText };
    setReviews([...reviews, newReview]);

    alert("Thank you for your review!");

    setRating(0);
    setReviewText("");
  };

  return (
    <div className="review-container">
      <h2 className="mb-4">Leave a Review</h2>
      <div className="mb-4">
        <Rating onClick={handleRatingChange} ratingValue={rating} />
      </div>
      <textarea
        className="form-control mb-4"
        placeholder="Write your review here..."
        value={reviewText}
        onChange={handleReviewChange}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Review
      </button>

      <h2 className="mt-4">Submitted Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 border p-3">
          <p className="mb-2">Rating: {review.rating}</p>
          <p>Review: {review.text}</p>
        </div>
      ))}
    </div>
  );
}

function loadRating() {
  return localStorage.getItem("rating") || 0;
}

function loadReview() {
  return localStorage.getItem("reviewText") || "";
}

function loadReviews() {
  const storedReviews = localStorage.getItem("reviews");
  return storedReviews ? JSON.parse(storedReviews) : [];
}

export default ReviewComponent;
