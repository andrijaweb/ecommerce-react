import { HiChevronRight } from "react-icons/hi2";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { Login as apiLogin } from "../../services/apiEcommerce";

function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="bg-beigeDarker rounded-md px-10 pt-10 pb-12 max-w-[54.625rem] mx-auto">
      <header className="flex flex-col items-center justify-center">
        <img className="w-[7.25rem] h-[4.5rem]" src="/logo.svg" alt="logo" />
        <h3 className="text-2xl font-medium">Welcome Back!</h3>
        <p className="text-sm opacity-70">Please enter your details</p>
      </header>

      <Form method="POST" className="max-w-[26.875rem] mx-auto text-sm">
        <div className="flex flex-col gap-2.5 mb-5">
          <label className="font-medium">Username</label>
          <input
            type="text"
            name="username"
            placeholder="johndoe"
            className="self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2.5 mb-3.5">
          <label className="font-medium">Password</label>
          <input
            type="password"
            name="password"
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
          <label htmlFor="remember" className="text-sm opacity-70">
            Remember me
          </label>
        </div>

        <button
          className="w-full bg-black rounded-md text-white py-3 border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 mt-8 mb-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
          <HiChevronRight className="inline ml-2" />
        </button>
      </Form>
      <p className="text-sm max-w-[26.875rem] mx-auto">
        Don't have an account?{" "}
        <span>
          <Link to="/signup" className="text-blue-600">
            Sign up
          </Link>
        </span>
      </p>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const credentials = {
    username: data.username,
    password: data.password,
  };

  const token = await apiLogin(credentials);
  console.log(token);

  return redirect("/");
}

export default Login;
