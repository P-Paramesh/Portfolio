import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Profile from "./routes/Profile"; 
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/project" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>     
    </Routes>
   </>
  )
}
export default App;
