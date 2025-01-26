
import { useUser } from "../context/UserContext";

const categories = [
  { id: "all", name: "All" },
  { id: "iphone 15", name: "iPhone 15" },
  { id: "iphone 15 plus", name: "iPhone 15 Plus" },
  { id: "iphone 16", name: "iPhone 16" },
  { id: "iphone 16 plus", name: "iPhone 16 Plus" },
  { id: "iphone 16 pro", name: "iPhone 16 Pro" },
  { id: "iphone 16 pro max", name: "iPhone 16 Pro Max" },
  { id: "isFavorited", name: "Favorited" }
];

const CategorySelect = () => {

  const {selectedCategory,handleCategory} = useUser()


  return (
    <div className="flex items-center justify-center py-2 md:space-x-4 " id="section1">
        <label
          htmlFor="category-select"
          className="hidden md:inline text-sm md:text-lg font-medium text-gray-700"
        >
          Select Category
        </label>

        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategory}
          className="w-40 md:w-60 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm focus:border-red-300"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}  >
              {category.name}
            </option>
          ))}
        </select>
      </div>
  );
};

export default CategorySelect;
