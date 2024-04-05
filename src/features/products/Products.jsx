import { useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiEcommerce";
import ProductItem from "../../ui/ProductItem";
import Filter from "../../ui/Filter";

function Products() {
  const products = useLoaderData();
  const [searchParams] = useSearchParams();
  console.log(products);

  if (!products) return;

  const filterValue = searchParams.get("category") || "all";
  let filteredProducts;
  if (filterValue === "all") filteredProducts = products;
  if (filterValue === "men's clothing")
    filteredProducts = products.filter(
      (product) => product.category === filterValue
    );
  if (filterValue === "women's clothing")
    filteredProducts = products.filter(
      (product) => product.category === filterValue
    );
  if (filterValue === "electronics")
    filteredProducts = products.filter(
      (product) => product.category === filterValue
    );
  if (filterValue === "jewelery")
    filteredProducts = products.filter(
      (product) => product.category === filterValue
    );

  return (
    <div>
      <Filter
        filterField="category"
        options={[
          { value: "all", label: "All" },
          { value: "men's clothing", label: "Men's clothing" },
          { value: "women's clothing", label: "Women's clothing" },
          { value: "electronics", label: "Electronics" },
          { value: "jewelery", label: "Jewelery" },
        ]}
      />
      <ul className="flex flex-wrap gap-8 justify-center mt-10">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Products;
