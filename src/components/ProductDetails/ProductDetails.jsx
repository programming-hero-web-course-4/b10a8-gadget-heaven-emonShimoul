import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductDetails = () => {
  const { product_id } = useParams();
  console.log(product_id);

  //   const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === product_id);
  console.log(product);

  const {
    product_title,
    product_image,
    price,
    rating,
    specification,
    description,
    availability,
  } = product;

  return (
    <div className="pt-10 pb-20">
      <div className="bg-[#9538E2] pt-10 pb-48 mb-[300px] text-white relative">
        <h2 className="text-3xl text-center font-bold mb-4">Product Details</h2>
        <p className="text-center w-1/2 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="hero-content flex-col lg:flex-row gap-12 mt-10 bg-white w-2/3 mx-auto rounded-2xl py-6 absolute top-75 left-60">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold"> {product_title}</h3>
          <p className="text-lg font-semibold text-gray-500">Price: ${price}</p>
          <p>
            <span className="border border-[#309C08] px-3 py-1 rounded-full bg-[#309C0819] text-[#309C08] font-semibold">
              {availability ? "In Stock" : "Not Available"}
            </span>
          </p>
          <p>{description}</p>
          <div>
            <p className="font-bold">Specification:</p>
            <ol className="list-decimal ms-4">
              {specification.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ol>
          </div>
          <p>
            <span className="font-bold">Rating:</span> <span>{rating}</span>
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-[#9538E2] text-white px-4 py-1 rounded-full cursor-pointer flex gap-1 justify-center items-center">
              <span className="text-base">Add to Cart</span>
              <IoCartOutline className="text-xl" />
            </button>
            <div className="border p-2 rounded-full text-gray-500 cursor-pointer">
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
