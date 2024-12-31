import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate in React Router v6
import cc from './CategoryCard.module.css'; // Add this CSS file for styling

const CategoryCard = ({ imageSrc, highlightText, route }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to the desired route on click
  const handleClick = () => {
    navigate(route); // Use navigate to go to the specified route
  };

  return (
    <div className={ cc.categoryCard} onClick={handleClick}>
      <div className={cc.cardImage}>
      <div className={cc.img} style={{ backgroundImage: `url(${imageSrc})` }} alt="Category"></div>
      <div className={cc.cardText}>{highlightText}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
