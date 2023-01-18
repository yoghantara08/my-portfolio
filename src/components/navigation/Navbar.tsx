import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavLink from "./NavLink";
import { CgMenuRight, CgClose } from "react-icons/cg";
import {
  linksVariants,
  logoVariants,
  navbarVariants,
} from "../../animation/navbar-motion";
import Backdrop from "../backdrop/Backdrop";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import { useEffect } from "react";

const navLink: { path: string; item: string }[] = [
  { path: "/about", item: "About" },
  { path: "/skills", item: "Skills" },
  { path: "/project", item: "Project" },
  { path: "/contact", item: "Contact" },
];

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const windowSize: Size = useWindowSize();

  // Make sure mobile menu closed when window width exceed 768px
  useEffect(() => {
    if (windowSize.width >= 768 && open === true) {
      cycleOpen();
    }
  }, [cycleOpen, open, windowSize]);

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <div onClick={() => cycleOpen()}>
            <Backdrop />
          </div>
        )}
      </AnimatePresence>
      <nav className="fixed top-0 left-0 right-0 flex justify-between px-10 lg:px-20 py-6 font-roboto duration-500">
        <Link to="/">
          <motion.img
            src={logo}
            alt="yoghantara"
            className="block w-10 h-10 md:w-11 md:h-12 pt-0 md:pt-1"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          />
        </Link>
        <motion.ul
          className="hidden md:flex items-center space-x-5"
          variants={linksVariants}
          initial="initial"
          animate="animate"
        >
          {navLink.map((nav, index) => (
            <NavLink key={nav.path} nav={nav} index={index} mobile={false} />
          ))}
        </motion.ul>

        {/* Mobile Navbar */}
        <div
          className="md:hidden text-4xl absolute top-5 right-7 cursor-pointer z-20"
          onClick={() => cycleOpen()}
        >
          {!open ? <CgMenuRight /> : <CgClose />}
        </div>
        <AnimatePresence mode="wait">
          {open && (
            <motion.ul
              className="md:hidden absolute top-0 right-0 h-screen w-full max-w-[320px]
              flex justify-center px-10 bg-slate-800"
              variants={navbarVariants}
              initial="closed"
              animate="opened"
              exit="exit"
            >
              <div className="flex flex-col justify-between py-36 h-full">
                {navLink.map((nav, index) => (
                  <NavLink
                    key={nav.path}
                    nav={nav}
                    index={index}
                    mobile={true}
                  />
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
