import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate in React Router v6
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage component
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect (optional)
import cc from './CategoryCard.module.css'; // Add this CSS file for styling

const CategoryCard = ({ imageSrc, highlightText, route }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to the desired route on click
  const handleClick = () => {
    navigate(route); // Use navigate to go to the specified route
  };

  return (
    <div className={cc.categoryCard} onClick={handleClick}>
      <div className={cc.cardImage}>
        {/* Use LazyLoadImage for lazy loading */}
        <LazyLoadImage
          className={cc.img}
          src={imageSrc}
          alt="Category"
          effect="blur" // Optional: Add a blur effect while loading
          height="400px" // Optional: Set height if necessary
          width="100%"   // Optional: Set width to 100% (adjust as needed)
        />
        <div className={cc.cardText}>{highlightText}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
