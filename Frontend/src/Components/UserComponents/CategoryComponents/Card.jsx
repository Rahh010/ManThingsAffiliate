import React, { useState } from 'react';
import styles from './Card.module.css';
import Font from '../Font.module.css'

const Card = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(product.images);


  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>

          {product.images.map((image) => 
            <img
            className={styles.image}
            src={`data:image/jpeg;base64,${image}`}
            />
          )}

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
