import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainLayout from "./components/layout/MainLayout";
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
    <MainLayout>
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
      <Footer />
    </MainLayout>
  );
}

export default App;
