import React, { useState } from 'react';
import styles from './Card.module.css';
import Font from '../Font.module.css'

const Card = ({ product }) => {


  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>

          {product.images.map((image, index) => 
            <img
            key={index}
            className={styles.image}
            src={`data:image/jpeg;base64,${image}`}
            />
          )}

      </div>
      <h3 className={`${styles.title} ${Font.poppinsR}`}>{product.name}</h3>
      <div className={`${styles.link} ${Font.poppinsR}`}>      
        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" >
            Get Product
        </a>
      </div>
    </div>
  );
};

export default Card;
