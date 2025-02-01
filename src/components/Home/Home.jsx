import { NavLink } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="mt-[500px] mb-16">
      <h2 className="text-center font-bold text-4xl mb-20">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex">
        <div className="w-1/5">
          <NavLink>All Products</NavLink>
          <NavLink>Laptops</NavLink>
          <NavLink>Phones</NavLink>
          <NavLink>Accessories</NavLink>
          <NavLink>SmartWatches</NavLink>
          <NavLink>MacBook</NavLink>
          <NavLink>Iphone</NavLink>
        </div>
        <div className="4/5">
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
