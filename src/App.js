import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";
import './App.css'

const App = () => {
  return (
    <div className="bg-gray-800  text-white h-screen flex text-black">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route 
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
              />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;

