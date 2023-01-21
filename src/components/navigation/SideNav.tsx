import { motion } from "framer-motion";
import { bulletNavVariants } from "../../animation/nav-motion";
import NavIcon from "./NavIcon";

const navLink: {
  id: number;
  path: string;
  icon: "home" | "about" | "skills" | "project" | "contact";
}[] = [
  { id: 1, path: "/", icon: "home" },
  { id: 2, path: "/about", icon: "about" },
  { id: 3, path: "/skills", icon: "skills" },
  { id: 4, path: "/project", icon: "project" },
  { id: 5, path: "/contact", icon: "contact" },
];

const BulletNav = () => {
  return (
    <nav className="hidden absolute top-0 bottom-0 h-screen right-[60px] md:flex justify-center flex-col mb-20 z-20">
      <motion.ul
        className="space-y-20"
        variants={bulletNavVariants.variants}
        initial="initial"
        animate="animate"
      >
        {navLink.map((nav) => (
          <NavIcon key={nav.id} path={nav.path} icon={nav.icon} />
        ))}
      </motion.ul>
    </nav>
  );
};

export default BulletNav;
