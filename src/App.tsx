import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import TodoPage from "./pages/todo/TodoPage";

function App() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
