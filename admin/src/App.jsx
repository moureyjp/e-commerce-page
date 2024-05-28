import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-[100vh] pb-20">
        <Navbar />
        <main className="max-w-screen-xl mx-auto">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<ViewProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/delete-product/:id" element={<DeleteProduct />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
