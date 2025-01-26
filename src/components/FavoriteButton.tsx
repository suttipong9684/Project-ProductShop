
import { FaHeart } from "react-icons/fa"; // ใช้ไอคอนหัวใจจาก react-icons

interface FavoriteButtonProps {
    productId: number;
    favorited: boolean;
    toggleFavorite: (id: number) => void; // รับฟังก์ชัน toggleFavorite จาก ProductList
}

const FavoriteButton = ({ productId,favorited,toggleFavorite }: FavoriteButtonProps) => {

  return (
    <button
      onClick={()=>toggleFavorite(productId)}
      className="focus:outline-none absolute top-2 right-2 p-2"
    >
      <FaHeart
        className={`text-xl transform transition-all duration-300 ${
            favorited ? "text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
