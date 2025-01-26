import { FiShoppingCart } from "react-icons/fi";
import { useUser } from "../context/UserContext";

const CartButton = () => {
  const { setIsOpenCart, amount } = useUser();
  return (
    <div className="">
      <button
        className="flex items-center justify-between space-x-2 text-sm text-white bg-red-800 px-2 py-1.5 rounded-lg hover:cursor-pointer hover:bg-red-700  transition duration-300"
        onClick={() => setIsOpenCart((prev) => !prev)}
      >
        <FiShoppingCart />
        <span className="hidden md:block">Cart</span>
        <span className={`${amount ? "block" : "hidden"}`}>{amount}</span>
      </button>
    </div>
  );
};

export default CartButton;
