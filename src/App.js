import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';
// import Navbar2 from './Pages/Navbar2.js';
import Contact from './Pages/Contact/Contact';
import Footer from "./Pages/Footer/Footer";
import Products from './Pages/Products/Products';
// import Navbar3 from './Pages/Navbar3';
function App() {
  return (
    <div className="App">

      {/* <Navbar3></Navbar3> */}
      {/* <Navbar2></Navbar2> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products></Products>} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
