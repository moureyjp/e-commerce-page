import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <img src="" alt="Logo" />
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
