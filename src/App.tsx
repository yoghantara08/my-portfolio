import { Route, Routes } from "react-router-dom";
import BulletNav from "./components/navigation/BulletNav";
import Navbar from "./components/navigation/Navbar";
import SocialLeft from "./components/social/SocialLeft";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <Navbar />
      <BulletNav />
      <SocialLeft />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
