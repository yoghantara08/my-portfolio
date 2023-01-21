import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainLayout from "./components/layout/MainLayout";
import BulletNav from "./components/navigation/SideNav";
import Navbar from "./components/navigation/Navbar";
import SocialLeft from "./components/social/SocialLeft";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

const variant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3500);
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <BulletNav />
      <SocialLeft />
      <motion.div variants={variant} initial="initial" animate="animate">
        <AnimatePresence mode="wait">
          {isLoaded && (
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </MainLayout>
  );
}

export default App;
