import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import {
  linksVariants,
  logoVariants,
  menuBurgerVariants,
  navbarVariants,
} from "../../animation/nav-motion";
import { logo } from "../../assets";
import { navLink } from "../../content";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import Backdrop from "../backdrop/Backdrop";
import NavLink from "./NavLink";

const Navbar: React.FC<{ visible: boolean; yOffset: number }> = ({
  visible,
  yOffset,
}) => {
  const [open, cycleOpen] = useCycle(false, true);
  const windowSize: Size = useWindowSize();

  // Make sure mobile menu closed when window width exceed 768px
  useEffect(() => {
    if (windowSize.width >= 768 && open === true) {
      cycleOpen();
    }
  }, [cycleOpen, open, windowSize]);

  // Close mobile nav when clicked
  const closeNavMobile = () => (open ? cycleOpen() : "");

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <div onClick={() => cycleOpen()}>
            <Backdrop />
          </div>
        )}
      </AnimatePresence>
      <nav
        className={`${visible ? "top-0" : "-top-24"}
        ${yOffset > 100 ? "" : ""}
        fixed left-0 right-0 flex justify-between px-10 
        lg:px-20 py-6 font-roboto duration-500 z-20`}
      >
        <Link to="/">
          <motion.img
            src={logo}
            alt="yoghantara"
            className="block w-10 h-10 md:w-11 md:h-12 pt-0 md:pt-1"
            variants={logoVariants.variants}
            initial="initial"
            animate="animate"
          />
        </Link>
        <motion.ul
          className="hidden md:flex items-center space-x-7"
          variants={linksVariants.variants}
          initial="initial"
          animate="animate"
        >
          {navLink.map((nav, index) => (
            <NavLink key={nav.path} nav={nav} index={index} mobile={false} />
          ))}
        </motion.ul>

        {/* Mobile Navbar */}
        <motion.div
          className="md:hidden text-4xl absolute top-5 right-7 cursor-pointer z-20"
          onClick={() => cycleOpen()}
          variants={menuBurgerVariants.variants}
          initial="initial"
          animate="animate"
        >
          {!open ? <CgMenuRight /> : <CgClose />}
        </motion.div>
        <AnimatePresence mode="wait">
          {open && (
            <motion.ul
              className="md:hidden absolute top-0 right-0 h-screen w-full max-w-[70%] sm:max-w-[320px]
              flex justify-center px-10 bg-slate-800"
              variants={navbarVariants.variants}
              initial="closed"
              animate="opened"
              exit="exit"
            >
              <div
                className={`flex flex-col justify-center h-full ${
                  windowSize.height > 650 ? "space-y-20" : "space-y-8"
                }`}
              >
                {navLink.map((nav, index) => (
                  <NavLink
                    key={nav.path}
                    nav={nav}
                    index={index}
                    mobile={true}
                    onClick={closeNavMobile}
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
