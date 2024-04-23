import React, { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ stars }) {
  const [rating, setRating] = useState(0);
  const[hover,setHover]=useState(0);
  function handleClick(rat) {
    setRating(rat);
  }

  function handleMouseEnter(idx) {
setHover(idx)
  }

  function handleMouseLeave() {
setHover(rating)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* if u keep display:'grid '  the stars will be arranged in 1 colunm and multiple rows*/}
      {[...Array(stars)].map((_, index) => {
        index+=1;
        return (
          <FaStar
            key={index}
            size={50}
            color={index <=(hover|| rating) ? "gold" : "black"}
            onClick={() => handleClick(index)}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        );
      })}
    </div>
  );
}
