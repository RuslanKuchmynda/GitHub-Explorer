import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/errorPage/ErrorPage";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;