import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./layouts/Portfolio";
import Dashboard from "./layouts/Dashboard";
import Input from "./layouts/Input";
import Profile from "./layouts/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/input" element={<Input />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
