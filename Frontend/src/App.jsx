import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/UserComponents/Home";
import Something from './Components/UserComponents/Something'
import Products from "./Components/UserComponents/CategoryComponents/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accessories" element={<Products category="accessories" />} />
        <Route path="/bottomwears" element={<Products category="bottomwear" />} />
        <Route path="/gadgets" element={<Products category="gadgets" />} />
        <Route path="/grooming" element={<Products category="grooming" />} />
        <Route path="/fitness" element={<Products category="fitness" />} />
        <Route path="/footwears" element={<Products category="footwear" />} />
        <Route path="/topwears" element={<Products category="topwear" />} />
      </Routes>
    </Router>
  );
};

export default App;

