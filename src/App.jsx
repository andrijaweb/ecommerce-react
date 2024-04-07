import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import Product, { loader as productLoader } from "./features/products/Product";
import Cart from "./features/cart/Cart";
import Login, { action as loginAction } from "./features/user/Login";
import Signup, { action as createUserAction } from "./features/user/Signup";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/signup",
        element: <Signup />,
        action: createUserAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
