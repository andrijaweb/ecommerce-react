import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="text-sm">
      <Link to="/products" className="text-blue-400">
        &larr; Back to Products
      </Link>

      <p className="font-medium mt-7 text-2xl">
        Your cart is empty. Please add a product.
      </p>
    </div>
  );
}

export default EmptyCart;
