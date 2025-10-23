import Cart from "./components/Cart";
import Header from "./components/Header";
import Body from "./components/Body";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
    console.log(theme);
  };
  return (
    <div className={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <OutletWrapper theme={theme} />
    </div>
  );
};
const OutletWrapper = ({ theme }) => {
  return <Outlet context={{ theme }} />;
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
