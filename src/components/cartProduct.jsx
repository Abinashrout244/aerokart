import { TrashIcon } from "lucide-react";
import { addItem, removeItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ name, price, images, id, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  // const [counter, setCounter] = useState(1);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   if (counter == 1) {
  //     setCounter(0);
  //     handleRemoveItem();
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // };
  const increment = () => {
    dispatch(addItem({ id, name, price, images }));
  };
  const decrement = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="flex items-center justify-between w-full   md:max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow gap-4">
      <div className="flex-shrink-0 w-12 h-12 md:w-24 md:h-24">
        <img
          src={images}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-1">
        <h2 className=" text-sm md:text-lg font-semibold truncate">{name}</h2>
        <p className="text-gray-600 font-medium">${price}</p>
      </div>
      <div className="flex items-center gap-3 flex-col">
        <div className="flex items-center gap-3">
          <button
            onClick={() => decrement()}
            className="w-8 h-8 flex items-center justify-center text-lg font-bold rounded-full bg-gray-300 hover:bg-gray-400 transition"
          >
            -
          </button>
          <p className="text-lg font-semibold">{quantity}</p>
          <button
            onClick={() => increment()}
            className="w-8 h-8 flex items-center justify-center text-lg font-bold rounded-full bg-gray-300 hover:bg-gray-400 transition"
          >
            +
          </button>
        </div>
        <h1>{price * quantity}</h1>
      </div>

      <div>
        <button
          onClick={handleRemoveItem}
          className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
        >
          <TrashIcon className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
