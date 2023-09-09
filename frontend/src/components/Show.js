import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";
import isAuthenticated from "./IsAuthenticated";
import axios from "axios";

const URI = `https://it-crowd-backend.onrender.com/products`;

const Show = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const user = isAuthenticated();

  const handleLogout = () => {
    navigate("/", { state: { isAuthenticated: false } });
    localStorage.removeItem("jwtToken");
    alert("You have logged out");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URI);
        if (response.status === 200) {
          const data = response.data;
          setProducts(data); // Indica que la marca ha sido cargada
        } else {
          console.error("Error obtaining the brand");
        }
      } catch (error) {
        console.error("Error on the fetch", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-around">
        {user ? (
          user.roleId === 1 ? (
            <div className="flex flex-col justify-center items-center sm:flex-row justify-around">
              <button
                onClick={handleLogout}
                className="w-32 m-4 bg-red-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
              >
                Logout
              </button>
              <Link
                to="/create"
                className="m-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
              >
                Create Product
              </Link>
              <Link
                to="/create/brand"
                className="m-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
              >
                Create Brand
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="w-32 m-4 bg-red-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            >
              Logout
            </button>
          )
        ) : (
          <Link
            to="/login"
            className="m-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
          >
            Login
          </Link>
        )}
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Show;
