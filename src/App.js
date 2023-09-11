// Import necessary dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your components

import Users from "./components/users";
import Appuser from "./components/usersexamplpe";

function App() {
  return (
    <div>
      {/* Define your routes using the Routes component */}
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/appuser" element={<Appuser />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
