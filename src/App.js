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
import Dashboard from "./components/modules/dashboard";
import Community from "./components/modules/community";
import Calendar from "./components/modules/calendar";
import Meeting from "./components/modules/meeting";
import Members from "./components/modules/members";
import Documents from "./components/modules/documents";
import Circular from "./components/modules/circular";
import Transfer from "./components/modules/transfer";
import Directory from "./components/modules/directory";
import Contacts from "./components/modules/contacts";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/members" element={<Members />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/circular" element={<Circular />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
