import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || "all";

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-4 items-center justify-center">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          option={option}
          handleClick={handleClick}
          isActive={option.value === currentFilter}
          isDisabled={option.value === currentFilter}
        />
      ))}
    </div>
  );
}

export default Filter;
