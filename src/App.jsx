import Cart from "./components/Cart";
import Header from "./components/Header";
import Body from "./components/Body";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const AppLayout = () => <RouterProvider router={appRouter} />;

export default AppLayout;
