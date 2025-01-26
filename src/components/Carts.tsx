import { MdCancelPresentation } from "react-icons/md";
import { useUser } from "../context/UserContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: string;
  storage: string;
  brand: string;
  isFavorited: boolean;
  quantity: number;
}

const Carts = () => {
  const {
    isOpenCart,
    productInCart,
    total,
    setIsOpenCart,
    removeProduct,
    addToCart,
    DecreaseProduct,
  } = useUser();

  const handleRemove = (product: Product) => {
    removeProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleDecrease = (product: Product) => {
    DecreaseProduct(product);
  };

  return (
    <>
      <div
        className={`bg-white fixed right-0 top-0 w-4/5 md:w-2/4 lg:w-2/5 xl:w-2/6 2xl:w-1/4 p-6 h-screen z-40 rounded-lg transform transition-transform duration-500 
              ${isOpenCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Shopping Cart</h3>
          <button
            className="hover:text-red-500 transform duration-300"
            onClick={() => setIsOpenCart((prev) => !prev)}
          >
            <MdCancelPresentation className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}

        <div className="mt-8 bg-white h-[calc(100%-100px)] overflow-y-auto">
          {productInCart && productInCart.length !== 0 ? (
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {productInCart.map((product) => (
                <li key={product.id} className="flex py-6 ">
                  <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4 ">
                    <img
                      alt={product.image}
                      src={product.image.toString()}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className=" flex flex-1 flex-col ">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.image}>{product.name}</a>
                        </h3>
                        <p className="ml-4">{(product.price * product.quantity).toLocaleString()}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {product.quantity}</p>
                      <div className="flex items-center justify-between space-x-4 text-2xl pr-2">
                        <button
                          type="button"
                          className="font-medium text-red-700 hover:text-red-500"
                          onClick={() => handleAddToCart(product)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="font-medium text-red-700 hover:text-red-500"
                          onClick={() => handleDecrease(product)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end ml-4">
                    <button onClick={() => handleRemove(product)}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center p-4">No item</div>
          )}
          <hr className="mt-20" />
          <div className="px-4 py-2 flex items-start justify-between mt-2">
            <div>
              <h3 className="text-gray-800 text-xl font-medium">Total</h3>
              <p className="text-gray-600 mt-2">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
            <div className="text-gray-800 text-xl font-medium">
              ฿{total.toLocaleString()}
            </div>
          </div>
          <div className="w-full p-4" onClick={() => setIsOpenCart((prev) => !prev)}>
            <Link to="/Checkout">
            <button
              className="bg-red-700 hover:bg-red-600 text-white w-full rounded-md p-4"
              disabled={productInCart.length === 0}
            >
              Checkout
            </button>
            </Link>
          </div>
          <hr className="" />
        </div>
      </div>

      {/* Overlay */}
      {isOpenCart && (
        <div
          className="bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-30"
          onClick={() => setIsOpenCart((prev) => !prev)}
        />
      )}
    </>
  );
};

export default Carts;
