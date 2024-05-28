import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import CompleteModal from "./CompleteModal";

const AddProduct = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/products", {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
      });
      setIsComplete(true);
    } catch (error) {
      console.error(error);
    }
  };

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
            <h1 className="text-3xl font-extrabold text-[#333]">Product</h1>
          </div>

          <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
            <input
              className="px-2 focus:outline-none border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              placeholder="Name"
              ref={nameRef}
              required
            />
            <input
              className="px-2 focus:outline-none  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              placeholder="Description"
              ref={descriptionRef}
              required
            />
            <input
              className="focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="number"
              placeholder="Price"
              ref={priceRef}
              required
            />
          </div>
          <button
            type="submit"
            className="focus:outline-none mt-8 text-base font-medium focus:ring-2 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 rounded"
          >
            Add Product
          </button>
        </div>
      </form>
      {isComplete && <CompleteModal message={"Product Added!"} />}
    </div>
  );
};

export default AddProduct;
