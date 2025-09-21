import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ProductCard = ({
  name,
  description,
  rating,
  reviews,
  price,
  images,
  id,
}) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem({ name, price, images, id }));
  };
  return (
    <div className="border border-slate-200 shadow-md shadow-slate-300 rounded-lg w-[310px] h-[450px] flex flex-col overflow-hidden">
      <div className="w-full border-b border-slate-300">
        <img
          src={images}
          alt={name}
          className="rounded-t-lg w-full h-[205px] object-cover hover:opacity-50 hover:overflow-hidden hover:scale-110 transition-all"
        />
      </div>

      <div className="px-3 py-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold truncate">{name}</h2>
          <p className="text-sm font-semibold text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-yellow-500 text-[15px] font-semibold">
            ⭐⭐⭐⭐ {rating}
          </span>
          <p className="text-xs text-slate-500 font-bold">
            ({reviews} reviews)
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <h2 className="text-lg font-semibold">${price}</h2>
          <button
            onClick={() => handleAddItem()}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 text-sm rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
