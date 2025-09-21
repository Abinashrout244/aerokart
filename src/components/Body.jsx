import ProductCard from "./ProductCard";
import Product from "./Product";
import { ProductContext } from "../utils/ProductContext";
import { useContext } from "react";
import Useonline from "../utils/Useonline";

const Body = () => {
  const { filteredAllCategory } = useContext(ProductContext);

  const isOnline = Useonline();
  if (!isOnline) {
    return (
      <div className="w-screen h-screen bg-slate-700 flex items-center justify-center">
        <h1 className="text-lg text-slate-400 text-center">
          Check Your Internet Connection
        </h1>
      </div>
    );
  }

  return (
    <div className="px-20 pb-10  flex flex-col justify-center items-center gap-10">
      <Product />
      <div className="flex flex-row flex-wrap gap-3 justify-center">
        {filteredAllCategory.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
