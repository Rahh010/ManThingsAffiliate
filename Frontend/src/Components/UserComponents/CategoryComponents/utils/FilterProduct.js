import axios, { all } from 'axios';

const FetchAndFilterProduct = async (userCategory) => {
  try {
    // Fetch all products from the backend
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/products/`);
    const allProducts = response.data.products;
    console.log(allProducts)

    // Filter products based on the category
    const filteredProducts = allProducts.filter(product => product.category === userCategory);
    console.log(filteredProducts)
    return filteredProducts; // Return the filtered products
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array in case of an error
  }
};

export default FetchAndFilterProduct
