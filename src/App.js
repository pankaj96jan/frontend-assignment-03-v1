import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./pages/styles.css"
import Header from "./pages/Header";
import CompanyInfo from "./pages/CompanyInfo";
import { useEffect } from "react";
import ProtectedRoute from "./pages/ProtectedRoutes";
const users = JSON.parse(localStorage.getItem("users"));
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
