import React, { useEffect, useState } from "react";
import axios from "axios";

const Listingproduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/products`);
        setProducts(res.data.products || []); // Ensure products is always an array
        setLoading(false);
        console.log(res)
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}api/products/delete/${productId}`, { withCredentials: true });
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      ); // Update state after deletion
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Failed to delete the product.");
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Product Listings</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product, index) => (
            <li
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>
                <strong>Category:</strong> {product.category || "Uncategorized"}
              </p>
              <p>
                <strong>Affiliate Link:</strong>{" "}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.affiliateLink}
                </a>
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.images && product.images.length > 0 ? (
                  product.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={`data:image/png;base64,${image}`}
                      alt={`Product ${index + 1} - Image ${idx + 1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ))
                ) : (
                  <p>No images available.</p>
                )}
              </div>
              <button
                onClick={() => deleteProduct(product._id)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listingproduct;
