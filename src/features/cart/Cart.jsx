import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartOrderSummary from "./CartOrderSummary";

function Cart() {
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="text-sm">
      <h1 className="text-3xl font-medium mb-10">Shopping Cart</h1>
      <div className="flex justify-between">
        <ul>
          {cart.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))}
        </ul>

        <div>
          <CartOrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
