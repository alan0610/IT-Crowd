import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "react-loaders";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3031/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Link to={"/"} className="flex display">
        {"<--"}Back to products{" "}
      </Link>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="md:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="product"
              className="md:w-1/2 w-full h-auto object-cover object-center rounded"
              src={product.image_url}
            />
            <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-0 md:mt-20">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.brandId}
              </h2>
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
      <Loader type="pacman" />
    </>
  );
};

export default Product;
