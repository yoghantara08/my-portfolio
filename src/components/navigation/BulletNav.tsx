import { motion } from "framer-motion";
import { BsFillDiamondFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import {
  bulletNavVariants,
  bulletVariants,
  diamondVariants,
} from "../../animation/navigation";

const navLink: { id: number; path: string; item: string }[] = [
  { id: 1, path: "/", item: "Home" },
  { id: 2, path: "/about", item: "About" },
  { id: 3, path: "/skills", item: "Skills" },
  { id: 4, path: "/project", item: "Project" },
  { id: 5, path: "/contact", item: "Contact" },
];

const BulletNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden absolute top-0 bottom-0 h-screen right-[60px] md:flex justify-center flex-col mb-20">
      <motion.ul
        className="space-y-20"
        variants={bulletNavVariants}
        initial="initial"
        animate="animate"
      >
        {navLink.map((nav) => (
          <motion.li
            key={nav.id}
            className="group relative"
            variants={bulletVariants}
          >
            <Link to={nav.path} className="flex justify-center items-center">
              <div
                className="bottom-0 pb-6 pr-1 xl:pb-0 xl:pr-8 xl:right-0 xl:-bottom-1
                  opacity-0 hidden absolute font-roboto text-gray text-lg
                  group-hover:flex group-hover:opacity-100 transition duration-200"
              >
                {nav.item}
              </div>
              <motion.div
                className="z-20"
                variants={diamondVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <BsFillDiamondFill
                  fill={`${
                    location.pathname === nav.path ? "#00c6bc" : "currentColor"
                  }`}
                />
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default BulletNav;
