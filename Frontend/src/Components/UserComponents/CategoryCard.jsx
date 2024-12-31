import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate in React Router v6
import { Blurhash } from 'react-blurhash'; // Import Blurhash component
import cc from './CategoryCard.module.css'; // Add this CSS file for styling

const CategoryCard = ({ imageSrc, highlightText, route, blurHash }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [imageLoaded, setImageLoaded] = useState(false); // State to track when the image is loaded

  // Function to navigate to the desired route on click
  const handleClick = () => {
    navigate(route); // Use navigate to go to the specified route
  };

  // Function to handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true); // Set the image loaded state to true
  };

  return (
    <div className={cc.categoryCard} onClick={handleClick}>
      <div className={cc.cardImage}>
        {/* Show the BlurHash until the image is loaded */}
        {!imageLoaded && blurHash ? (
          <Blurhash
            hash={blurHash} // The blurhash string for the image
            width="100%" // Set the width
            height="100%" // Set the height
            resolutionX={32} // Set the resolution for the blurhash
            resolutionY={32} // Set the resolution for the blurhash
            punch={1} // Control the sharpness of the blur
          />
        ) : (
          <img
            className={cc.img}
            loading="lazy"
            src={imageSrc}
            alt="Category"
            onLoad={handleImageLoad} // Set image loaded state when the image is loaded
          />
        )}
        <div className={cc.cardText}>{highlightText}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
