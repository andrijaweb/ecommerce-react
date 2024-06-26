import { HiChevronRight } from "react-icons/hi2";
import { Form, Link, redirect } from "react-router-dom";
import { createUser } from "../../services/apiEcommerce";

function Signup() {
  return (
    <div className="bg-beigeDarker grid grid-cols-[1fr_1fr] rounded-md px-10 pt-10 pb-12 max-w-[54.625rem] mx-auto">
      <header className="flex flex-col items-center justify-center">
        <img className="w-[7.25rem] h-[4.5rem]" src="/logo.svg" alt="logo" />
        <h3 className="text-2xl font-medium">Create a new account</h3>
        <p className="text-sm opacity-70">Please enter your details</p>
      </header>

      <div>
        <Form className="text-sm" method="POST">
          <div className="flex flex-col gap-2.5 mb-5">
            <label className="font-medium">Username</label>
            <input
              type="text"
              name="username"
              placeholder="John"
              className="self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2.5 mb-5">
            <label className="font-medium">Email</label>
            <input
              type="text"
              name="email"
              placeholder="johndoe@gmail.com"
              className="self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2.5 mb-3.5">
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
              required
            />
          </div>

          <div className="flex gap-2.5 mb-5">
            <div>
              <label className="font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="6838628384"
                className="mt-2.5 self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
                required
              />
            </div>
            <div>
              <label className="font-medium">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Saint Luis. 84"
                className="mt-2.5 self-start w-full bg-transparent p-2.5 border-2 border-slate-600 rounded-md"
                required
              />
            </div>
          </div>

          <button className="w-full bg-black rounded-md text-white py-3 border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 mb-2.5">
            Sign Up
            <HiChevronRight className="inline ml-2" />
          </button>
          <p className="text-xs mb-5">
            By creating an account, you agree to our{" "}
            <span className="text-blue-600">Terms of Service</span> and{" "}
            <span className="text-blue-600">Privacy Policy</span>
          </p>
        </Form>
        <p className="text-sm">
          Already have an account?{" "}
          <span>
            <Link to="/login" className="text-blue-600">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  await createUser(data);

  return redirect("/");
}

export default Signup;
