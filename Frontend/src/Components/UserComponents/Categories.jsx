import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes in React Router v6
import Font from './Font.module.css';
import catStyle from './Categories.module.css';
import CategoryCard from './CategoryCard';
import accessoriesImage from './images/accessories.webp';
import bottom from './images/bottom.webp';
import gadgets from './images/gadgets.webp';
import Grooming from './images/grooming.webp';
import Fitness from './images/fitnesss.webp';
import Footwears from './images/shoe.webp';
import Topwears from './images/t-shirt.webp';


const Categories = () => {

  const categoryCardObject = [
    {
        src: Topwears,
        text: "Top wears",
        path: "/topwears"
    },
    {
        src: bottom,
        text: "Bottom Wears",
        path: "/bottomwears"
    },
    {
        src: Footwears,
        text: "Foot wears",
        path: "/footwears"
    },
    {
        src: accessoriesImage,
        text: "Accessories",
        path: "/accessories"
    },
    {
        src: gadgets,
        text: "Gadgets",
        path: "/gadgets"
    },
    {
        src: Grooming,
        text: "Grooming",
        path: "/grooming"
    },
    {
        src: Fitness,
        text: "Fitness",
        path: "/fitness"
    },
  ];

  return (
    <div className={Font.cinzel}>
        <p className={catStyle.p}>Bhushan's Choice</p>
        
        {/* Map through categoryCardObject to generate CategoryCard components */}
        <div className={catStyle.cardContainer}>
          {categoryCardObject.map((category, index) => (
            <CategoryCard 
              key={index}
              imageSrc={category.src} 
              highlightText={category.text} 
              route={category.path}
            />
          ))}
        </div>
    </div>
  );
};

export default Categories;
