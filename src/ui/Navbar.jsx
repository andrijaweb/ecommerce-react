import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link
            to="/cart"
            className="flex flex-col items-center justify-center gap-1"
          >
            <HiOutlineShoppingBag className="text-2xl" />
            <p>Cart</p>
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
            to="/"
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
