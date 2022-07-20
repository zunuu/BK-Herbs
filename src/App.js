import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
