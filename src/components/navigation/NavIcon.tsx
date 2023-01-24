import { motion } from "framer-motion";
import { FaCode, FaHome, FaPencilRuler, FaUserSecret } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { INav } from "../../content";

const NavIcon: React.FC<INav> = ({ path, item }) => {
  const location = useLocation();

  let navIcon;

  switch (item) {
    case "Home":
      navIcon = (
        <FaHome
          title="Home"
          className="group-hover:fill-aqua duration-300"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "About":
      navIcon = (
        <FaUserSecret
          title="About Me"
          className="group-hover:fill-aqua duration-300"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "Skills":
      navIcon = (
        <FaPencilRuler
          title="Skills"
          className="group-hover:fill-aqua duration-300"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "Projects":
      navIcon = (
        <FaCode
          title="Project"
          className="group-hover:fill-aqua duration-300"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
    case "Contact":
      navIcon = (
        <MdEmail
          title="Contact"
          className="group-hover:fill-aqua duration-300"
          fill={`${location.pathname === path ? "#00c6bc" : "#e6e6e6"}`}
        />
      );
      break;
  }

  return <motion.div className="z-20">{navIcon}</motion.div>;
};

export default NavIcon;
