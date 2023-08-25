import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './composants/Navbar';
import Home from "./pages/Home";
import Project from "./pages/Project";
import School from "./pages/School";
import Work from "./pages/Work";
import Workmore from "./pages/Workmore";
import Connect from "./pages/Connect";
import Addproject from "./pages/Addproject";
import { useUser } from './composants/lib/customHook';
import { APP_ROUTES } from './utils/constants';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/school" element={<School />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/http" element={<Workmore />} />
        <Route path="/admin" element={<Connect />} />
        <Route path="/admin/add_project" element={<Addproject />} />

      </Routes>

    </div>
  );
}

export default App;
