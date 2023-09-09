import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const URI1 = "http://localhost:3031/products/";
const URI2 = "http://localhost:3031/brands/";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try{
      const response = await axios.get(URI1 + id);
      if (response.status === 200) {
        const data = response.data;
        setProduct(data); // Indica que el product ha sido cargado
      } else {
        console.error("Error obtaining the brand");
      } 
    }catch (error) {
      console.error("Error on the fetch", error);
    }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(URI2 + product.brandId);
        if (response.status === 200) {
          const data = response.data;
          setBrand(data); // Indica que la marca ha sido cargada
        } else {
          console.error("Error obtaining the brand");
        }
      } catch (error) {
        console.error("Error on the fetch", error);
      }
    };

    if (product.brandId) {
      fetchBrands();
    }
  }, [product.brandId]);

  return (
    <>
      <div className="flex justify-start mr-4 ">
        <Link
          to="/"
          className="m-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          {"<--"} Back to products
        </Link>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="md:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="product"
              className="md:w-1/2 w-full h-auto object-cover object-center rounded"
              src={product.image_url}
            />
            <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-0 md:mt-20 flex flex-col items-center">
              <img alt="logo" src={brand.logo_url} className="w-1/4 mb" />
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex justify-center items-center mt-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
