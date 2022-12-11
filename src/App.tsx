import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Shophomepage from "./pages/Shophomepage";
import Login from "./pages/login";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Shophomepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mycart" element={<ShoppingCart isOpen={true} />} />
          <Route path="/topic" element={<Shophomepage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
