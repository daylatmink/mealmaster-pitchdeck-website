import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, LoginPage, RegisterPage } from "./pages";
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