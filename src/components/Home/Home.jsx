import { NavLink } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="pt-[500px] pb-12 mb-16">
      <h2 className="text-center font-bold text-4xl mb-20">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-8">
        <div className="w-1/4 flex justify-end">
          <div className="w-1/2 bg-white flex flex-col gap-4 items-center py-8">
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              All Products
            </NavLink>
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              Laptops
            </NavLink>
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              SmartWatches
            </NavLink>
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              Accessories
            </NavLink>
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              Phones
            </NavLink>
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              MacBook
            </NavLink>
            <NavLink className="bg-[#09080F0D] py-2 ps-6 w-4/5 rounded-full">
              Iphone
            </NavLink>
          </div>
        </div>
        <div className="3/4">
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
