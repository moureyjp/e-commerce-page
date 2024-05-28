import { Link } from "react-router-dom";

import view from "../assets/view.png";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";

const Product = ({ data }) => {
  const { id, name, description, price } = data;

  return (
    <tr>
      <td className="p-4 text-center">{name}</td>
      <td className="p-4 text-center">{description}</td>
      <td className="p-4 text-center">{price}</td>
      <td className="flex gap-4 justify-center p-4">
        <Link to={`/product/${id}`}>
          <img src={view} alt="View" className="w-6" />
        </Link>
        <Link to={`/update-product/${id}`}>
          <img src={edit} alt="Edit" className="w-6" />
        </Link>
        <Link to={`/delete-product/${id}`}>
          <img src={del} alt="Delete" className="w-6" />
        </Link>
      </td>
    </tr>
  );
};

export default Product;
