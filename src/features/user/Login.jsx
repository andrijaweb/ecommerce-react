import { HiChevronRight } from "react-icons/hi2";

function Login() {
  return (
    <div className="bg-beigeDarker rounded-md px-10 pt-10 pb-12 max-w-[54.625rem] mx-auto">
      <header className="flex flex-col items-center justify-center">
        <img className="w-[7.25rem] h-[4.5rem]" src="/logo.svg" alt="logo" />
        <h3 className="text-2xl font-medium">Welcome Back!</h3>
        <p className="text-sm opacity-70">Please enter your details</p>
      </header>

      <form className="max-w-[26.875rem] mx-auto text-sm" autocomplete="off">
        <div className="flex flex-col gap-2.5 mb-5">
          <label className="font-medium">Email</label>
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            className="self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2.5 mb-3.5">
          <label className="font-medium">Password</label>
          <input
            type="password"
            autocomplete="off"
            className="self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
          />
        </div>

        <div>
          <input
            id="remember"
            type="checkbox"
            name="remember"
            className="h-3.5 w-3.5 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1 mr-2"
          />
          <label for="remember" className="text-sm opacity-70">
            Remember me
          </label>
        </div>

        <button className="w-full bg-black rounded-md text-white py-3 border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 mt-8 mb-5">
          Login
          <HiChevronRight className="inline ml-2" />
        </button>
        <p>
          Don't have an account?{" "}
          <span>
            <a className="text-blue-600" href="/">
              Sign up
            </a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
