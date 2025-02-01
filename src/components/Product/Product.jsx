const Product = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-6 pt-6 pb-4">
        <img
          className=" rounded-lg"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-col gap-2 ps-4 pb-8">
        <h2 className="text-2xl font-semibold">{product.product_title}</h2>
        <p className="text-xl text-gray-500 font-semibold">
          price: <span>100</span>K
        </p>
        <div className="mt-4">
          <button className="border-2 border-[#9538E2] text-[#9538E2] text-lg font-semibold py-2 px-4 rounded-full cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
