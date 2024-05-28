import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ViewProduct = () => {
  const { id } = useParams();
  const { datas, isLoading, error } = useFetch(
    `http://127.0.0.1:8000/api/products/${id}`
  );

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 "></div>
      </div>
    );
  }

  return <div>Product {id}</div>;
};

export default ViewProduct;