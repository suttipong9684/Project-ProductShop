import { createContext, useContext, useEffect, useState } from "react";
import productsAll from "../assets/productsAll";

interface UserContextType {
  products: Product[];
  productInCart: Product[];
  isOpenCart: boolean;
  total: number;
  amount: number;
  filteredProducts: Product[];
  query: string;
  selectedCategory: string;
  setProductInCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (product: Product) => void;
  removeProduct: (product: Product) => void;
  DecreaseProduct: (product: Product) => void;
  toggleFavorite: (id: number) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

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

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  // State Initialization
  const [products, setProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>(JSON.parse(localStorage.getItem("products") || "[]"));
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const [productInCart, setProductInCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("productInCart") || "[]")
  );
  const [total, setTotal] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  // UseEffect: Sync newProducts with localStorage
  useEffect(() => {
    if (newProducts.length === 0) {
      setNewProducts(products);
    }
  }, [products, newProducts]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(newProducts));
  }, [newProducts]);

  // UseEffect: Sync productInCart with localStorage
  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(productInCart));
  }, [productInCart]);

  // Toggle Favorite
  const toggleFavorite = (id: number) => {
    const updatedProducts = newProducts.map((product) =>
      product.id === id
        ? { ...product, isFavorited: !product.isFavorited }
        : product
    );
    setNewProducts(updatedProducts);
  };

  // Handle Category Change
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  // Handle Search Query Input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Filter Products by Search Query
  useEffect(() => {
    const search = newProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.color.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.storage.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(search);
  }, [query, newProducts]);

  // Filter Products by Category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(newProducts);
    } else if (selectedCategory === "isFavorited") {
      const filteredProducts = newProducts.filter((product) => product.isFavorited);
      setFilteredProducts(filteredProducts);
    } else {
      const filteredProducts = newProducts.filter(
        (product) => product.name.toLowerCase() === selectedCategory
      );
      setFilteredProducts(filteredProducts);
    }

  }, [selectedCategory, newProducts]);

  // Add Product to Cart
  const addToCart = (product: Product) => {
    const addProduct = productInCart.find((item) => item.id === product.id);
    if (addProduct) {
      setProductInCart((prevProducts) =>
        prevProducts.map((item) =>
          item.id === addProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setProductInCart((prevProducts) => [
        ...prevProducts,
        { ...product, quantity: 1 },
      ]);
    }
  };

  // Remove Product from Cart
  const removeProduct = (product: Product) => {
    setProductInCart((prevProduct) =>
      prevProduct.filter((item) => item.id !== product.id)
    );
  };

  // Decrease Product Quantity in Cart
  const DecreaseProduct = (product: Product) => {
    const decrease = productInCart.find((item) => item.id === product.id);
    if (decrease) {
      setProductInCart((prevProducts) =>
        prevProducts
          .map((item) =>
            item.id === decrease.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  };

  // Initialize Products
  useEffect(() => {
    const updatedProducts = productsAll.map((product) => ({
      ...product,
      isFavorited: false,
      quantity: 0,
    }));
    setProducts(updatedProducts);
  }, []);

  // Calculate Cart Totals
  useEffect(() => {
    const { totalPrice, sumAmount } = productInCart.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        cartTotal.totalPrice += price * quantity;
        cartTotal.sumAmount += quantity;
        return cartTotal;
      },
      {
        totalPrice: 0,
        sumAmount: 0,
      }
    );
    setTotal(totalPrice);
    setAmount(sumAmount);
  }, [productInCart]);

  return (
    <UserContext.Provider
      value={{
        products,
        isOpenCart,
        productInCart,
        total,
        amount,
        filteredProducts,
        query,
        selectedCategory,
        handleSearch,
        toggleFavorite,
        handleCategory,
        setIsOpenCart,
        setProductInCart,
        addToCart,
        removeProduct,
        DecreaseProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser ต้องอยู่ภายใน UserProvider");
  }
  return context;
};
