import React, { useState } from "react";
import './StarRating.css'

function StarRating({ rating, setRating }) {
  const [hover, setHover] = useState(0);
    
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            id="star-button"
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
  };

export default StarRating;