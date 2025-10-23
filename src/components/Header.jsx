import { SearchIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/ProductContext";
import { useContext } from "react";
import Logo from "../assets/images/Logo-1.png";
import Useonline from "../utils/Useonline";

import { useSelector } from "react-redux";
// import { ThemeContext } from "../utils/ThemeContext";

const Header = ({ theme, toggleTheme }) => {
  const [searchText, setSearchText] = useState("");
  const { handleFilter } = useContext(ProductContext);
  const isOnline = Useonline();
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearch = () => {
    handleFilter(searchText);
  };

  const CartItems = useSelector((store) => store?.cart?.items);

  return (
    <div
      className={`p-3 fixed top-0 left-0 right-0 z-40 shadow-lg flex justify-around items-center ${
        theme == "light"
          ? "bg-white text-slate-800"
          : "bg-slate-700 text-gray-600"
      }`}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="dumy"
          className="w-[180px] h-[80px]"
          data-testid="logo"
        ></img>
      </Link>

      <div className="w-[700px] flex">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Product"
          className="bg-gray-200 rounded-md p-3 w-full"
        />
        <button onClick={handleSearch} className="-ml-10">
          <SearchIcon />
        </button>
      </div>
      <p data-testid="online">{isOnline ? "✅" : "🔴"}</p>

      <Link to="/cart" className="p-2.5 flex ">
        <ShoppingCart className="w-7 h-7 " />
        <p
          className="bg-cyan-300 text-slate-800 font-semibold rounded-full p-1 relative -top-3.5 -left-1.5"
          data-testid="cart"
        >
          {CartItems.length}
        </p>
      </Link>
      <button
        onClick={toggleTheme}
        className="mr-4 px-4 py-1 rounded-lg border border-cyan-500 font-semibold
          hover:bg-cyan-500 hover:text-white transition"
      >
        {theme === "light" ? "🌙 " : "☀️"}
      </button>
    </div>
  );
};

export default Header;
