import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCancelPresentation } from "react-icons/md";

// import components
import CartButton from "./CartButton";
import BackgroundImage from "./BackgroundImage ";
import Carts from "./Carts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <BackgroundImage imageUrl="https://images.pexels.com/photos/1103063/pexels-photo-1103063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <nav className="p-4 relative">
        {/* Container Navbar */}
        <div className={`flex items-center justify-between`}>
          {/* hamburger menu */}
          <div className="flex md:hidden pr-3 z-10">
            <button
              className="text-white hover:text-red-500 transform duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-between w-full">
            <div>
              <Link to="/home" className="flex space-x-2">
                <div className="text-red-500 text-2xl md:text-3xl font-bold">
                  Product
                </div>
                <div className="text-white text-2xl md:text-3xl font-bold">
                  Shop
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4 items-center pr-4">
              <Link
                to="/home"
                className="text-white hover:text-red-500 hover:border-b hover:border-red-500 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/service"
                className="text-white  hover:text-red-500 hover:border-b hover:border-red-500 transition duration-300"
              >
                Service
              </Link>
              <Link
                to="/contact"
                className="text-white  hover:text-red-500 hover:border-b hover:border-red-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <CartButton />
        </div>

        <Carts />
        

        {/*mobile menu */}

        <div className="md:hidden">
          <div
            className={` bg-gray-900 w-2/3 sm:w-1/2 rounded-lg px-6 h-screen fixed top-0 left-0 z-40 transform transition-transform duration-500
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex items-center justify-between my-6">
              <Link to="/Home" className="flex space-x-2">
                <div className="text-red-500 text-2xl font-bold">Product</div>
                <div className="text-white text-2xl font-bold">Shop</div>
              </Link>
              <button
                className="text-white hover:text-red-500 transform duration-300"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <MdCancelPresentation className="w-7 h-7" />
              </button>
            </div>

            <Link
              to="/home"
              className="block text-white p-4 hover:text-red-500 transition duration-300"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Home
            </Link>

            <Link
              to="/service"
              className="block text-white p-4 hover:text-red-500 transition duration-300"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Service
            </Link>
            <Link
              to="/contact"
              className="block text-white p-4 hover:text-red-500 transition duration-300"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Contact
            </Link>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="bg-black bg-opacity-50 w-full h-screen fixed top-0 left-0 z-30"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>

        {/* Navbar sticky */}
        <div
          className={`fixed top-0 left-0 w-full bg-gray-900 text-white transform transition-transform duration-300 z-20 px-4 py-3
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex items-center justify-between ">
            {/* hamburger menu sticky */}
            <div className="flex md:hidden pr-3 z-10 ">
              <button
                className="text-white hover:text-red-500 transform duration-300"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Logo sticky */}
            <div className="flex items-center justify-between w-full">
              <div>
                <Link to="/Home" className="flex space-x-2">
                  <div className="text-red-500 text-2xl md:text-3xl font-bold">
                    Product
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-bold">
                    Shop
                  </div>
                </Link>
              </div>

              {/* Desktop menu sticky */}
              <div className="hidden md:flex space-x-4 items-center pr-4">
                <Link
                  to="/home"
                  className="text-white hover:text-red-500 hover:border-b hover:border-red-500 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/service"
                  className="text-white  hover:text-red-500 hover:border-b hover:border-red-500 transition duration-300"
                >
                  Service
                </Link>
                <Link
                  to="/contact"
                  className="text-white  hover:text-red-500 hover:border-b hover:border-red-500 transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <CartButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
