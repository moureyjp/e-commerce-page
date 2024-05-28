import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";
import CompleteModal from "./CompleteModal";

const UpdateProduct = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/products/${id}`
  );
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/api/products/${id}`, formData);
      setIsComplete(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading product data: {error.message}</div>;
  }

  setFormData({
    name: datas.name,
    description: datas.description,
    price: datas.price,
  });

  return (
    <div className="lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
      <Link
        to="/"
        className="text-base dark:text-gray-400 leading-4 underline hover:text-gray-800 text-gray-600"
      >
        Back
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center"
      >
        <div className="flex w-full flex-col justify-start items-start">
          <div className="mt-12">
            <h1 className="text-3xl font-extrabold text-[#333]">
              Update Product
            </h1>
          </div>
          <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
            <input
              className="px-2 focus:outline-none border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="px-2 focus:outline-none border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              className="focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="number"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="focus:outline-none mt-8 text-base font-medium focus:ring-2 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 rounded"
          >
            Update Product
          </button>
        </div>
      </form>
      {isComplete && <CompleteModal message={"Update Successful!"} />}
    </div>
  );
};

export default UpdateProduct;
