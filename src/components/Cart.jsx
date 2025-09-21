import { ShoppingBagIcon } from "lucide-react";
import CartProduct from "./cartProduct";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const CartItems = useSelector((store) => store?.cart?.items);
  const Total_price = CartItems.reduce((accumlator, product) => {
    return accumlator + product.price;
  }, 0);
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="px-2 py-40 md:px-[470px] md:pt-[150px] flex flex-col gap-1.5">
      <div>
        <h1 className="flex flex-row gap-3 text-2xl font-semibold items-center">
          <ShoppingBagIcon />
          <p>Shooping Cart</p>
          <h3>({CartItems.length})</h3>
        </h1>
      </div>
      <div className="pt-5 flex flex-col gap-3">
        {CartItems.map((product, index) => {
          return <CartProduct {...product} key={product?.id ?? index} />;
        })}
      </div>
      <div className="flex flex-row justify-between pt-[50px]">
        <h1 className="text-lg font-semibold">Total:</h1>
        <p className="text-[17px] font-semibold">${Total_price}</p>
      </div>
      <button
        onClick={handleClearcart}
        className="p-2 bg-green-300 text-[15px] w-full rounded-lg "
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
