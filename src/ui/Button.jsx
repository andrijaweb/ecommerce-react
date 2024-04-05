function Button({ children }) {
  return (
    <button className="bg-mainYellow font-medium text-center px-6 py-3.5 rounded-lg border-2 border-yellow-400 hover:bg-transparent hover:border-black transition-all duration-300 flex items-center justify-center">
      {children}
    </button>
  );
}

export default Button;
