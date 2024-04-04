function FilterButton({ option, handleClick, isActive, isDisabled }) {
  return (
    <button
      onClick={() => handleClick(option.value)}
      disabled={isDisabled}
      className={`px-5 py-3 border-2 border-black rounded-lg ${
        isActive ? "bg-black text-white" : ""
      } hover:bg-black hover:text-white transition-all duration-300`}
    >
      {option.label}
    </button>
  );
}

export default FilterButton;
