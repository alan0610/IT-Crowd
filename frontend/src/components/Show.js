import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Show = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); // Obtener la ubicación actual, incluyendo el estado
  const isAuthenticated = location.state?.isAuthenticated || false; // Usar el estado o establecerlo en falso si no está definido
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { state: { isAuthenticated: false } });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:3031/products`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-end mr-4">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
          >
            Cerrar Sesión
          </button>
        ) : (
          <Link
            to="/login"
            className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Show;
