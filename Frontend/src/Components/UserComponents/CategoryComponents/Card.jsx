import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styles from './Card.module.css';
import Font from '../Font.module.css'

const Card = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % product.images.length
        : prevIndex === 0
        ? product.images.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <button onClick={() => changeImage("prev")} className={styles.navButton}>
          <FaAngleDoubleLeft />
        </button>

        {/* Using a div for the background image */}
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(data:image/jpeg;base64,${product.images[currentImageIndex]})`,
          }}
        />

        <button onClick={() => changeImage("next")} className={styles.navButton}>
          <FaAngleDoubleRight />
        </button>
      </div>
      <h3 className={`${styles.title} ${Font.poppinsR}`}>{product.name}</h3>
      <div className={`${styles.link} ${Font.poppinsR}`}>      
        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" >
            Buy Now
        </a>
      </div>

    </div>
  );
};

export default Card;
