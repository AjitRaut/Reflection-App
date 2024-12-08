import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import FeedbackForm from "./components/FeedBackForm";
import Header from "./components/Header"; 
import CreateLink from "./components/CreateLink";

const App = () => {
  return (
    <Router>
      <Header /> 
      <div className="mt-16">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<CreateLink />} />
        <Route path="/feedback/:feedbackName" element={<FeedbackForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
      
    </Router>
  );
};

export default App;
