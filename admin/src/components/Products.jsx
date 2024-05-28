import useFetch from "../hooks/useFetch";

import Product from "./Product";

const Products = () => {
  const { datas, isLoading, error } = useFetch(
    "http://127.0.0.1:8000/api/products"
  );

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 "></div>
      </div>
    );
  }

  return (
    <table className="w-full mt-12">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <Product key={data.id} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
