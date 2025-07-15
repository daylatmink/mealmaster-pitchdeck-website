import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
// import các page khác nếu có

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginUser" element={<LoginPage />} />
          <Route path="/registerUser" element={<RegisterPage />} />
            {/* Thêm Route cho các trang khác nếu cần */}
        </Routes>
      </Router>
  );
}

export default App;