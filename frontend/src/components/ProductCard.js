import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import isAuthenticated from './IsAuthenticated'

const URI = "https://it-crowd-backend.onrender.com/products/"
const URI2 = "https://it-crowd-backend.onrender.com/brands"

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const token = localStorage.getItem("jwtToken");
  const user = isAuthenticated();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get(URI);
        const brandResponse = await axios.get(URI2);
  
        if (productResponse.status === 200 && brandResponse.status === 200) {
          setProducts(productResponse.data);
          setBrands(brandResponse.data);
        } else {
          console.error("Error obtaining data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(URI + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error eliminating the product", error);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 flex justify-center items-center">
          {products.map((product) => {
            const { id, name, brandId, price, image_url } = product;
            return (
              <div
                key={id}
                className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-full p-4 border border-opacity-50 transition duration-300 ease-in-out transform hover:bg-gray-100 m-2"
              >
                <Link to={`/${id}`}>
                  <div className="w-full h-64 m-auto border-b-2">
                    <img
                      alt={name}
                      className="w-full h-full object-contain"
                      src={image_url}
                    />
                  </div>
                </Link>

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                  {brands.find((brand) => brand.id === brandId)?.name}
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium">
                    {name}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>

                {user && user.roleId === 1 && (
                  <div className="flex justify-between mt-4">
                  <Link
                    to={`/update/${id}`} // Ruta para actualizar el producto
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(id)} // Función para eliminar el producto
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
