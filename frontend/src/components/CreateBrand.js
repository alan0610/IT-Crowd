import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI1 = "https://it-crowd-backend.onrender.com/brands";

const Create = () => {
  const [name, setName] = useState("");
  const [logo_url, setLogo_url] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  //FUNCTION TO CREATE BRAND
  const store = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        URI1,
        {
          name: name,
          logo_url: logo_url,
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
        console.error("Error creating the brand");
      }
    } catch (error) {
      console.error("Error on the fetch", error);
    }
  };

  return (
    <div className="container px-5 py-24 mx-auto flex justify-center items-center h-screen">
      <form className="w-full max-w-sm" onSubmit={store}>
        <h1 className="text-2xl mt-5 block text-gray-700 font-bold mb-2">
          CREATE BRAND
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
            required
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="description"
            className="mt-3 block text-gray-700 text-sm mb-2 font-bold"
          >
            Image (URL only)
          </label>
          <input
            value={logo_url}
            onChange={(e) => setLogo_url(e.target.value)}
            type="url"
            name="logo_url"
            id="logo_url"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
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

export default Create;
