import React, { useState } from "react";
import axios from "axios";
import { encode } from "base64-arraybuffer"; // Import encode function
import Listingproduct from "./Listingproduct";
import log from './Login.module.css'

const Dashboard = () => {
  const [formData, setFormData] = useState({
    productName: "",
    affiliateLink: "",
    photos: [],
    previews: [],
    category: "", // Added category field
  });

  console.log(import.meta.env.VITE_BACKEND_URL)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const base64Promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result;
          const base64 = encode(arrayBuffer); // Convert to Base64
          resolve(base64);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file); // Read file as ArrayBuffer
      });
    });

    const previewPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result); // Get preview URL
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file); // Read file as Data URL for preview
      });
    });

    Promise.all([Promise.all(base64Promises), Promise.all(previewPromises)])
      .then(([base64Data, previews]) => {
        setFormData((prevState) => ({
          ...prevState,
          photos: [...prevState.photos, ...base64Data],
          previews: [...prevState.previews, ...previews],
        }));
      })
      .catch((err) => {
        console.error("Error processing images:", err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that a category is selected
    if (!formData.category) {
      alert("Please select a category.");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/products/upload`,
        {
          name: formData.productName,
          affiliateLink: formData.affiliateLink,
          images: formData.photos,
          category: formData.category, // Include category in the request
        },
        { withCredentials: true } // Make sure the token is sent with the request
      );

      if (res.status === 201) {
        alert("Product uploaded successfully!");

        // Reset form data to default values
        setFormData({
          productName: "",
          affiliateLink: "",
          photos: [],
          previews: [],
          category: "", // Reset category
        });
      }
    } catch (err) {
      console.error("Error uploading product:", err);
      alert("Failed to upload the product.");
    }
  };

  return (
    <>
      <h1 >Upload a Product</h1>
      <form onSubmit={handleSubmit}  >
        <div >
          <label >Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
            placeholder="Enter product name"
            
          />
        </div>

        <div >
          <label >Affiliate Link:</label>
          <input
            type="url"
            name="affiliateLink"
            value={formData.affiliateLink}
            onChange={handleInputChange}
            required
            placeholder="Enter affiliate link"
            
          />
        </div>

        <div >
          <label >Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="accessories">Accessories</option>
            <option value="gadgets">Gadgets</option>
            <option value="grooming">Grooming</option>
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="footwear">Footwear</option>
            <option value="fitness">Fitness</option>
          </select>
        </div>

        <div >
          <label >Product Photos (at least 2):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            required
            
          />
        </div>

        <div >
          {formData.previews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index + 1}`}
              className={log.img}
            />
          ))}
        </div>

        <button type="submit" >
          Upload Product
        </button>
      </form>
      <div>
        <Listingproduct />
      </div>
    </>
  );
};

export default Dashboard;
