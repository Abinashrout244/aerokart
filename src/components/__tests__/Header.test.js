import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { MemoryRouter } from "react-router-dom";
import ProductProvider from "../../utils/ProductContext";
import { ProductContext } from "../../utils/ProductContext";

const mockContextValue = {
  handleFilter: () => {},
};
const handleFilter = () => {};
const filteredAllCategory = [];

test("Logo should load on rendering Header", () => {
  const header = render(
    <Provider store={Store}>
      <MemoryRouter>
        <ProductContext.Provider value={{ handleFilter, filteredAllCategory }}>
          <Header />
        </ProductContext.Provider>
      </MemoryRouter>
    </Provider>
  );
  //* const logo = header.getAllByTestId("logo");  // this is where thre is used more numer of logo.
  // console.log(logo);
  // expect(logo[0].src).toBe("http://localhost/Dummy.png");
  const logo = header.getByTestId("logo");
  console.log(logo);
  expect(logo.src).toBe("http://localhost/Dummy.png");
});

test("online status cheack on rendering Header", () => {
  const header = render(
    <Provider store={Store}>
      <MemoryRouter>
        <ProductProvider value={mockContextValue}>
          <Header />
        </ProductProvider>
      </MemoryRouter>
    </Provider>
  );
  const logo = header.getByTestId("online");
  console.log(logo);
  expect(logo.innerHTML).toBe("✅");
});
test(" cheack our cart on rendering Header", () => {
  const header = render(
    <Provider store={Store}>
      <MemoryRouter>
        <ProductProvider value={mockContextValue}>
          <Header />
        </ProductProvider>
      </MemoryRouter>
    </Provider>
  );
  const cart = header.getByTestId("cart");
  console.log(cart);
  expect(cart.innerHTML).toBe("0");
});

test(" cheack our serach functionalty on rendering Header", () => {
  render(
    <Provider store={Store}>
      <MemoryRouter>
        <ProductProvider value={mockContextValue}>
          <Header />
        </ProductProvider>
      </MemoryRouter>
    </Provider>
  );
});
