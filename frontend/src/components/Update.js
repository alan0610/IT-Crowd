import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI1 = "http://localhost:3031/products/";
const URI2 = "http://localhost:3031/brands";

const Update = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brands, setBrands] = useState([]);
  const [image_url, setImage_url] = useState("");
  const [price, setPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(URI2);
        if (response.status === 200) {
          const data = response.data;
          setBrands(data);
        } else {
          console.error("Error obtaining the brands");
        }
      } catch (error) {
        console.error("Error on the fetch", error);
      }
    };

    fetchBrands();
  }, []);

  const update = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        URI1 + id,
        {
          name: name,
          description: description,
          image_url: image_url,
          price: price,
          brandId: selectedBrand,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Error updating the product");
      }
    } catch (error) {
      console.error("Error on the fetch", error);
    }
  };

  const getProductById = () => {
    axios.get(URI1 + id)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setImage_url(response.data.image_url);
        setSelectedBrand(response.data.brandId);
        setPrice(response.data.price);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div className="container px-5 py-24 mx-auto flex justify-center items-center h-screen">
      <form className="w-full max-w-sm" onSubmit={update}>
        <h1 className="text-2xl mt-5 block text-gray-700 font-bold mb-2">
          UPDATE PRODUCT
        </h1>
        <div className="sm:col-span-1">
          <label
            htmlFor="name"
            className="mt-3 block text-gray-700 text-sm mb-2 font-bold"
          >
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="description"
            className="mt-3 block text-gray-700 text-sm mb-2 font-bold"
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            id="description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="image"
            className="mt-3 block text-gray-700 text-sm mb-2 font-bold"
          >
            Image (URL only)
          </label>
          <input
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
            id="image"
            name="image"
            type="url"
            autoComplete="image"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="Brand"
            className="mt-3 block text-gray-700 text-sm mb-2 font-bold"
          >
            Brand
          </label>
          <div className="mt-1 space-y-2">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center space-x-2 p-2 rounded-lg"
              >
                <input
                  type="radio"
                  id={brand.id}
                  name="brand"
                  value={brand.id}
                  onChange={handleBrandChange}
                  className="text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  required
                />
                <label htmlFor={brand.id} className="text-sm text-gray-700">
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="Price"
            className="mt-3 block text-gray-700 text-sm mb-2 font-bold"
          >
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
            id="price"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="m-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
