
import { useUser } from "../context/UserContext";

const SearchBar = () => {

  const {query,handleSearch} = useUser()

  return (
    <div className="flex items-center justify-center">
      <form action="" >
        <input
          type="text"
          className="w-40 md:w-60 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm focus:border-red-300"
          placeholder="Search here..."
          value={query}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
