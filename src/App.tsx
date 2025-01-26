import "./App.css";

// Component imports
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <main>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </main>
  );
}

export default App;
