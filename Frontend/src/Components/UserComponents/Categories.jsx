import React from 'react';
import Font from './Font.module.css';
import catStyle from './Categories.module.css';
import CategoryCard from './CategoryCard';
import accessoriesImage from './images/acc.jpeg';
import bottom from './images/pant.jpeg';
import gadgets from './images/gad.jpeg';
import Grooming from './images/groom.jpeg';
import Fitness from './images/jim.jpeg';
import Footwears from './images/shoe.jpeg';
import Topwears from './images/shirt.jpeg';


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

  console.log(Font.cinzel);


  return (
    <div className={Font.cizel}>
        <p className={catStyle.p}>Bhushan's Choice</p>
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
