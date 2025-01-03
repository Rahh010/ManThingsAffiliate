import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import Nav from './Nav';
import FetchProduct from './utils/FilterProduct';
import Card from './Card';
import Font from '../Font.module.css';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await FetchProduct(category);
        console.log(response)
        setProducts(response); // Update the products state
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts();
  }, [category]); // Run effect whenever the category changes

  return (
    <div className={styles.bg}>
      <Nav />
      <div className={styles.productGrid}>
        {loading ? (
          <div className={`${styles.loading} ${Font.poppinsLi}`}>
            Products are loading...
            <span class={styles.loader}></span>
          </div>
        ) : products.length > 0 ? (
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
