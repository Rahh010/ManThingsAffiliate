import axios, { all } from 'axios';

const FetchAndFilterProduct = async (userCategory) => {
  try {
    // Fetch all products from the backend
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/products?category=${userCategory}`);
    const allProducts = response.data.products;
    console.log(allProducts)
    return allProducts
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array in case of an error
  }
};

export default FetchAndFilterProduct
