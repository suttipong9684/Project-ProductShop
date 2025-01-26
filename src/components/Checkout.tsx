import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

function Checkout() {
  interface FormData {
    name: string;
    email: string;
    address: string;
    paymentMethod: string;
  }

  const { productInCart, total } = useUser();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const [isPurchase, setIsPurchase] = useState<boolean>(false);

  const handleCheckout = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePurchase = () => {
    alert("Thank you for your purchase!");
    setIsPurchase(!isPurchase);
  };

  useEffect(() => {
    localStorage.removeItem("productInCart");
    return setIsPurchase(false);
  }, [isPurchase]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="py-10">
          <h2 className="text-2xl font-semibold text-center text-gray-700 ">
            Order Confirmation
          </h2>
          <ul className="py-4 ">
            {productInCart.map((product) => (
              <li
                key={product.id}
                className="p-4text-sm font-medium text-gray-600 border-b border-gray-200"
              >
                {product.name} {product.color} {product.storage} x
                {product.quantity} - ฿
                {(product.price * product.quantity).toLocaleString()}
              </li>
            ))}
          </ul>
          <p className="text-center text-xl font-semibold text-gray-700 p-4">
            Total: ฿{total.toLocaleString()}
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Checkout
        </h2>

        <form onSubmit={handlePurchase}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleCheckout}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleCheckout}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleCheckout}
              rows={4}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-600"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleCheckout}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
