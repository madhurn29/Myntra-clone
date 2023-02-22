
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AdminRoutes from './Routes/AdminRoutes';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <AdminRoutes/> */}
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );


}

export default App;
