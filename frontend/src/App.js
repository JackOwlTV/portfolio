import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './composants/Navbar';
import Home from "./pages/Home";
import Project from "./pages/Project";
import Oneproject from './pages/Oneproject';
import School from "./pages/School";
import Work from "./pages/Work";
import Workmore from "./pages/Workmore";
// import Footer from './composants/Footer';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<Oneproject />} />
        <Route path="/school" element={<School />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/http" element={<Workmore />} />

      </Routes>
      </div>
  );
}

export default App;
