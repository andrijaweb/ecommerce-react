import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="opacity-70">{error.data || error.message}</p>
      <button
        className="bg-mainYellow font-medium text-center px-4 py-2 rounded-lg border-2 border-yellow-400 hover:bg-transparent hover:border-black transition-all duration-300 self-start"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
