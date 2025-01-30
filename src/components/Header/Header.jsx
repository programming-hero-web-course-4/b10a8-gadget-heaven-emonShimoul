import NavBar from "../NavBar/NavBar";
import BannerImage from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="bg-[#9538E2] rounded-2xl">
      <NavBar></NavBar>
      <div className="text-center text-white flex flex-col gap-8 pt-16 pb-56">
        <h2 className="text-6xl font-bold w-4/5 mx-auto leading-18">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="w-1/2 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button className="bg-white text-[#9538E2] font-bold py-2 px-6 rounded-4xl cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
      <div className="max-w-[1065px] absolute">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
