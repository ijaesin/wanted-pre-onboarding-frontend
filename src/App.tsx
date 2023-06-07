import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <div className="App absolute inset-0 flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
