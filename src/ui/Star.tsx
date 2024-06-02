import { HiOutlineStar } from "react-icons/hi2";

function Star({ full }) {
  return (
    <span className="text-lg text-yellow-400">
      <HiOutlineStar className={`${full ? "fill-yellow-400" : ""}`} />
    </span>
  );
}

export default Star;
