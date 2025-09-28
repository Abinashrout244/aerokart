import { SearchIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/ProductContext";
import { useContext } from "react";
import Logo from "../assets/images/Logo-1.png";

import { useSelector } from "react-redux";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { handleFilter } = useContext(ProductContext);

  const handleSearch = () => {
    handleFilter(searchText);
  };

  const CartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="bg-white p-3 fixed top-0 left-0 right-0 z-40 shadow-lg flex justify-around items-center">
      <Link to="/">
        <img src={Logo} className="w-[180px] h-[80px]"></img>
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

      <Link to="/cart" className="p-2.5 flex ">
        <ShoppingCart className="w-7 h-7 " />
        <p className="bg-cyan-300 text-slate-800 font-semibold rounded-full p-1 relative -top-3.5 -left-1.5">
          {CartItems.length}
        </p>
      </Link>
    </div>
  );
};

export default Header;
