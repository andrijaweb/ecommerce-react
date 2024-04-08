import { HiOutlineTruck } from "react-icons/hi2";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

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
          <div className="bg-beigeDarker rounded-md p-5 text-lg w-[26.8125rem]">
            <h3 className="text-2xl font-medium mb-7">Order summary</h3>
            <ul className="flex flex-col gap-7">
              <li className="flex items-center justify-between">
                <p>Sub Total</p>
                <p>$78.02</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Tax</p>
                <p>$0.00</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Shipping</p>
                <p>Free</p>
              </li>
              <li className="flex items-center justify-between font-medium">
                <p>Total</p>
                <p>$63.02</p>
              </li>
            </ul>
            <button className="flex items-center justify-center gap-2.5 w-full bg-black border-2 border-black text-white py-3 rounded-md mt-7 hover:bg-transparent hover:text-black transition-all duration-300">
              <HiOutlineTruck className="text-2xl" />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
