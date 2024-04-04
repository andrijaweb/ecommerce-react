import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiEcommerce";
import ProductItem from "../../ui/ProductItem";
import Spinner from "../../ui/Spinner";

function Products() {
  const products = useLoaderData();
  console.log(products);

  if (!products) return <Spinner />;

  return (
    <div>
      <p>Sort buttons</p>
      <ul className="flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  return await getProducts();
}

export default Products;
