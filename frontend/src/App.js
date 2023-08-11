import { Routes, Route } from "react-router-dom";
import Navbar from './composants/Navbar';
import Home from "./pages/Home";
import About from "./pages/School";
import Workmore from "./pages/Workmore";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={'#aboutme'} />
        <Route path="/project" element={'#project'} />
        <Route path="/school" element={<About />} />
        <Route path="/work" element={'#work'} />
        <Route path="/work/:id" element={<Workmore />} />
      </Routes>

    </div>
  );
}

export default App;
