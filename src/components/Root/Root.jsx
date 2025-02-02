import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="bg-[#09080F0D]">
      <div className="max-w-[1240px] mx-auto bg-[#9538E2]  pt-4 mt-2 px-6 rounded-t-2xl">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
