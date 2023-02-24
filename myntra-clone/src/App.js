import "./App.css";
import Navbar from "./Components/Navbar";
import Otp from "./Pages/Otp";
import Signup from "./Pages/Signup";
import Wishlist from "./Pages/Wishlist";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
