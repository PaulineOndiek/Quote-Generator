import {BrowserRouter, Routes, Route, Links} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import QuoteAdd from "./Pages/QuoteAdd"
import Login from "./Pages/Login"

function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/QuoteAdd" element={<QuoteAdd/>}></Route>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
