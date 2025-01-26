

// components

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CategorySelect from "../components/CategorySelect";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <div className="flex justify-between items-center px-4 w-full bg-white z-10">
        <CategorySelect />
        <SearchBar />
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
