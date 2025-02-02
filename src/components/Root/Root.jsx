import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="bg-[#09080F0D]">
      <div className="max-w-[1540px] mx-auto bg-[#9538E2]  pt-6 mt-6 rounded-t-2xl">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
