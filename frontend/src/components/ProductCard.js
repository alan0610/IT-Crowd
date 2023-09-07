import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4 flex justify-center items-center">
          {products.map((product) => {
            const { id, name, brandId, price, image_url } = product;
            return (
              <Link
                to={`/${id}`}
                className="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full p-4 border border-opacity-50 transition duration-300 ease-in-out transform hover:bg-gray-100 m-2"
              >
                <div className="w-full h-64 m-auto border-b-2">
                  <img
                    alt={name}
                    className="w-full h-full object-contain"
                    src={image_url}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {brandId}
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium">
                    {name}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
