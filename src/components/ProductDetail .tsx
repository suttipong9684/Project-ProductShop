import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const ProductDetail = () => {
  const { filteredProducts,addToCart } = useUser();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // ข้อมูลสินค้า
    const product = filteredProducts.find((item) => item.id.toString() === id);
    setProduct( product || null)
  }, [id, filteredProducts]);

  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนหน้าจอกลับไปด้านบน
  }, []);

  const handleAddToCart = (product:Product) => {
    addToCart(product)
  }

  return (
    <div className="w-full bg-white z-5 h-screen">
        <div className="flex justify-between p-4 flex-wrap md:flex-nowrap ">
        <div className="w-full lg:w-3/5 xl:w-3/4 m-2 ">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full lg:w-2/5 xl:w-1/4 m-2 items-start p-6 border-2 border-red-500 rounded-md ">
          <div className="text-2xl font-semibold my-5  text-gray-800 ">
            <h2>
              {product?.name} ({product?.color})
            </h2>
          </div>
          <div className="flex items-center justify-between text-red-600 p-6 my-5  bg-gray-100 rounded-md">
            <h3 className="text-xl md:text-2xl font-thin">ราคา</h3>
            <h3 className="text-2xl md:text-4xl font-medium ">
              {product?.price.toLocaleString()}
            </h3>
            <h3 className="text-xl md:text-2xl font-thin">บาท</h3>
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-xl  text-gray-600">
            <h3>Color</h3>
            <p>:</p>
            <h3>{product?.color}</h3>
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-xl  text-gray-600">
            <h3>Storage</h3>
            <p>:</p>
            <h3>{product?.storage}</h3>
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-xl  text-gray-600">
            <h3>Brand</h3>
            <p>:</p>
            <h3>{product?.brand}</h3>
          </div>
          <div className=" text-red-700 mt-2 w-full">
          <button
            className="my-2 py-4 rounded-md float-right w-full  bg-red-700 text-white hover:bg-red-500 z-30 "
            onClick={() => product && handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
