import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./utils/ProductContext.jsx";
import Store from "./utils/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Provider>
);
