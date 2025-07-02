import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import các page khác nếu có

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Thêm Route cho các trang khác nếu cần */}
        </Routes>
      </Router>
  );
}

export default App;