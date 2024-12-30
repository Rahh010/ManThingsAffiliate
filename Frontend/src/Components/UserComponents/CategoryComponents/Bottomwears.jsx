import React, { useEffect, useState } from 'react';
import Acc from './Accessories.module.css';
import Nav from './Nav';
import FetchProduct from './utils/FilterProduct';
import Card from './Card';
import Font from '../Font.module.css';

const Accessories = () => {
  const [products, setProducts] = useState([]); // State to store products

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await FetchProduct('accessories');
      setProducts(response); // Update the products state
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <Nav />
      <div className={Acc.productGrid}>
        {products.length > 0 ? (
          products.map((product) => <Card key={product._id} product={product} />)
        ) : (
          <div className={`${Acc.noProduct} ${Font.poppinsLi}`}>No products available</div>
        )}
      </div>
    </div>
  );
};

export default Accessories; 