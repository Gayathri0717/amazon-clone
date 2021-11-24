import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
    
        <Routes>
          <Route path="/checkout"element={ <><Header/><Checkout/></> }></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<><Header/><Home/></>} > 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
