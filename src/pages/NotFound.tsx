
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-red-500 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
