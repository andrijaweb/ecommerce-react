import { HiChevronRight } from "react-icons/hi2";

function Button() {
  return (
    <button className="bg-mainYellow font-medium text-center px-6 py-3.5 rounded-lg border-2 border-yellow-400 hover:bg-transparent hover:border-black transition-all duration-300">
      <span>Start Shopping</span>
      <HiChevronRight className="inline ml-2.5" />
    </button>
  );
}

export default Button;
