import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Gallery from "./pages/Work";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
