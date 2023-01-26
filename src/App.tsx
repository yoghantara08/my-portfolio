import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainLayout from "./components/layout/MainLayout";
import SocialLeft from "./components/social/SocialLeft";
import SocialRight from "./components/social/SocialRight";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load component after all animation is completed
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3500);
  }, []);

  return (
    <MainLayout>
      <SocialLeft />
      <SocialRight />
      <AnimatePresence mode="wait">
        {isLoaded && (
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </AnimatePresence>
      <Footer />
    </MainLayout>
  );
}

export default App;
