import { useParams } from "react-router-dom";
import products from "../Product/Products";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default SingleProduct;
