import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

import CompleteModal from "./CompleteModal";

const DeleteProduct = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/products/${id}`
  );
  const [isComplete, setIsComplete] = useState(false);

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
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

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-[#333] text-center mt-12">
        Delete Product
      </h1>
      <div className="bg-slate-100 rounded-xl w-[17.5em] mx-auto mt-12 p-8 text-2xl">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">{datas.name}</h2>
          <div>
            <span>Description:</span>
            <p>{datas.description}</p>
          </div>
          <div className="flex gap-8">
            <span>Price:</span>
            <span>${datas.price}</span>
          </div>
        </div>
        <div className="flex mt-12 justify-between">
          <Link
            to="/"
            className="px-4 py-2 bg-green-500 rounded text-slate-100 font-bold"
          >
            Cancel
          </Link>
          <button
            onClick={deleteProduct}
            className="px-4 py-2 bg-red-500 text-slate-100 rounded font-bold"
          >
            Delete
          </button>
        </div>
      </div>
      {isComplete && <CompleteModal message={"Delete Successful!"} />}
    </div>
  );
};

export default DeleteProduct;
