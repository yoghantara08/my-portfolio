import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { bulletVariants, diamondVariants } from "../../animation/nav-motion";
import { FaHome, FaUserSecret, FaPencilRuler, FaCode } from "react-icons/fa";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

interface Props {
  path: string;
  icon: "home" | "about" | "skills" | "project" | "contact";
}

const NavIcon: React.FC<Props> = ({ path, icon }) => {
  const location = useLocation();

  let navIcon;

  switch (icon) {
    case "home":
      navIcon = (
        <FaHome
          title="Home"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "about":
      navIcon = (
        <FaUserSecret
          title="About Me"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "skills":
      navIcon = (
        <FaPencilRuler
          title="Skills"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "project":
      navIcon = (
        <FaCode
          title="Project"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "contact":
      navIcon = (
        <HiChatBubbleOvalLeftEllipsis
          title="Contact"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
  }

  return (
    <motion.li className="group relative" variants={bulletVariants.variants}>
      <Link to={path} className="flex justify-center items-center">
        <motion.div
          className="text-xl z-20"
          variants={diamondVariants.variants}
          whileHover="hover"
          whileTap="tap"
        >
          {navIcon}
        </motion.div>
      </Link>
    </motion.li>
  );
};

export default NavIcon;
