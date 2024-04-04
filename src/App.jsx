import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import Product from "./features/products/Product";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "product/product:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
