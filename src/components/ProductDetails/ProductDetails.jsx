import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { product_id } = useParams();
  console.log(product_id);

  //   const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === product_id);
  console.log(product);

  return (
    <div className="pt-[500px] pb-20">
      <h2 className="text-3xl text-center">This is {product.product_title}</h2>
    </div>
  );
};

export default ProductDetails;
