import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import Nav from './Nav';
import FetchProduct from './utils/FilterProduct';
import Card from './Card';
import Font from '../Font.module.css';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]); // State to store products

  console.log(category)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await FetchProduct(category); // Fetch products for the given category
      setProducts(response); // Update the products state
      console.log(response)
    };

    fetchProducts();
  }, [category]); // Run effect whenever the category changes

  return (
    <div className={styles.bg}>
      <Nav />
      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map((product) => <Card key={product._id} product={product} />)
        ) : (
          <div className={`${styles.noProduct} ${Font.poppinsLi}`}>
            No products available
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
