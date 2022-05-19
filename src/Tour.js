import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showText, setShowText] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showText ? `${info.substring(0, 200)}...` : info}
          <button onClick={() => setShowText(!showText)}>
            {showText ? "read more" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
