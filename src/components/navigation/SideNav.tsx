import { motion } from "framer-motion";
import { bulletNavVariants } from "../../animation/nav-motion";
import { navLink } from "../../content";
import NavIcon from "./NavIcon";

const BulletNav = () => {
  return (
    <nav className="hidden absolute top-0 bottom-0 h-screen right-[60px] md:flex justify-center flex-col mb-20 z-20">
      <motion.ul
        className="space-y-20"
        variants={bulletNavVariants.variants}
        initial="initial"
        animate="animate"
      >
        {navLink.map((nav, index) => (
          <NavIcon key={index} path={nav.path} item={nav.item} />
        ))}
      </motion.ul>
    </nav>
  );
};

export default BulletNav;
