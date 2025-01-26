import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

import { useUser } from "../context/UserContext";

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

const ProductList = () => {

  const {addToCart,filteredProducts,toggleFavorite} = useUser();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-white mb-5 z-10">
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-2 bg-white shadow-md rounded-xl  transform transition-all hover:scale-105 duration-300 relative"
          >
            {/* ส่งค่า productId, isFavorited และ toggleFavorite ไปยัง FavoriteButton */}
            <FavoriteButton
              productId={product.id}
              favorited={product.isFavorited}
              toggleFavorite={toggleFavorite}
            />

            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg "
              />
            </Link>
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-md text-gray-600 mt-2">
                {product.description}
              </p>
              <div className="mt-2 text-sm text-gray-600">
                <div className="">Color: {product.color}</div>
                <div className="">Storage: {product.storage}</div>
                <div className="">Brand: {product.brand}</div>
              </div>
              <div className=" text-red-700 mt-2">
                <span className="text-2xl font-medium">
                  ฿{product.price.toLocaleString()}
                </span>
                <button className="px-2 py-1 rounded-md float-right  bg-red-700 text-white hover:bg-red-500 z-30 " onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center text-2xl text-red-500 w-screen h-60">
          No products found
        </div>
      )}
    </div>
  );
};

export default ProductList;
