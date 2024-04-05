function Spinner() {
  return (
    <div className="absolute z-50 inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Spinner;
