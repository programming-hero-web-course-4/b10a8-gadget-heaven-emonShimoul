import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Laptops = () => {
  const allProducts = useLoaderData();
  // console.log(allProducts);

  const laptops = allProducts.filter(
    (product) => product.category === "laptop"
  );
  // console.log(laptops);

  return (
    <>
      {laptops.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </>
  );
};

export default Laptops;
