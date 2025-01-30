import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="bg-[#9538E2] rounded-2xl pb-20">
      <NavBar></NavBar>
      <div className="text-center text-white p-24 flex flex-col gap-8">
        <h2 className="text-6xl font-bold w-5/6 mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button className="bg-white text-[#9538E2] font-bold py-2 px-6 rounded-4xl">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
