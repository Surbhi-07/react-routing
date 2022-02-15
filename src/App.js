import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Register from './component/Register';
import About1 from './component/About1';
import About2 from './component/About2';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div>

      <Router>

        <Link to="">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Register/4564646">Regisid</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />} >
          <Route path="About1" element={<About1 />} />
          <Route path="About2" element={<About2 />} />
          </Route>
         
          <Route path="/Register" element={<Register />} />
          <Route path="/Register/:id" element={<Register />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
