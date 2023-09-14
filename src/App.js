// Import necessary dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your components

import Users from "./components/users";
import Appuser from "./components/usersexamplpe";
import Contact from "./components/contact";
import Demo from "./components/demo";
import About from "./components/about";
import Support from "./components/support";
import Security from "./components/security";
import Benefits from "./components/benefits";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/appuser" element={<Appuser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/security" element={<Security />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </div>
  );
}

export default App;
