import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../features/cart/cartSlice";

function Navbar() {
  const cartLength = useSelector(getCart).length;

  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link
            to="/cart"
            className="flex flex-col items-center justify-center gap-1 relative"
          >
            <HiOutlineShoppingBag className="text-2xl" />
            <p>Cart</p>
            {cartLength > 0 && (
              <p className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-2.5 bg-mainYellow rounded-full text-xs font-bold">
                {cartLength}
              </p>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-col items-center justify-center gap-1"
          >
            <HiOutlineHeart className="text-2xl" />
            <p>Favorites</p>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="flex flex-col items-center justify-center p-2 rounded-full bg-mainYellow"
          >
            <HiOutlineUser className="text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
