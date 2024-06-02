import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-sm text-white text-center bg-black pt-12 pb-10 flex flex-col items-center justify-center gap-3.5">
      <Link to="/">
        <img
          src="/logo-footer.svg"
          alt="logo"
          className="w-[7.25rem] h-[4.5rem]"
        />
      </Link>
      <p className="max-w-[13rem] opacity-70">
        Explore your favorite category and buy whatever you need today - online!
      </p>
    </footer>
  );
}

export default Footer;
