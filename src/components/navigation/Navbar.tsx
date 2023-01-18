import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavLink from "./NavLink";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navbarVariants } from "../../animation/variants";
import Backdrop from "../backdrop/Backdrop";

const navLink: { path: string; item: string }[] = [
  { path: "/about", item: "About" },
  { path: "/skills", item: "Skills" },
  { path: "/project", item: "Project" },
  { path: "/contact", item: "Contact" },
];

const Navbar = () => {
  const [open, cycleOpen] = useCycle(true, false);

  return (
    <>
      <AnimatePresence mode="wait">{open && <Backdrop />}</AnimatePresence>
      <nav className="fixed top-0 left-0 right-0 flex justify-between px-10 lg:px-20 py-6 font-roboto duration-500">
        <Link to="/">
          <img
            src={logo}
            alt="yoghantara"
            className="block w-10 h-10 md:w-11 md:h-12 pt-0 md:pt-1"
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-5">
          {navLink.map((nav, index) => (
            <NavLink key={nav.path} nav={nav} index={index} mobile={false} />
          ))}
        </ul>

        <div
          className="md:hidden text-4xl absolute top-5 right-7 cursor-pointer z-20"
          onClick={() => cycleOpen()}
        >
          {!open ? <CgMenuRight /> : <CgClose />}
        </div>
        <AnimatePresence mode="wait">
          {open && (
            <motion.ul
              className="md:hidden absolute top-0 right-0 h-screen w-full max-w-[400px]
            flex justify-center px-10 bg-darkBlue"
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
