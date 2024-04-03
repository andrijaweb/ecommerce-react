import { HiMagnifyingGlass } from "react-icons/hi2";

function Search() {
  return (
    <form className="relative w-[26.875rem]">
      <button
        type="submit"
        className="absolute top-1/2 left-5 translate-y-[-50%] cursor-pointer"
      >
        <HiMagnifyingGlass className="text-2xl text-slate-700" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-14 pr-5 py-2.5 bg-beigeDarker rounded-lg placeholder:text-slate-700"
      />
    </form>
  );
}

export default Search;
