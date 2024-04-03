import { Link } from "react-router-dom";
import Search from "./Search";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex items-center justify-between text-sm px-[3.75rem] pt-6">
      <Link to="/">
        <img className="w-[7.25rem] h-[4.5rem]" src="/logo.svg" alt="logo" />
      </Link>

      <Search />

      <Navbar />
    </header>
  );
}

export default Header;
