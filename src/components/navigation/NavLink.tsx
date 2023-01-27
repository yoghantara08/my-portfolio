import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { linkVariants } from "../../animation/nav-motion";
import NavIcon from "./NavIcon";

interface Props {
  nav: {
    path: string;
    item: "Home" | "About" | "Skills" | "Projects" | "Contact";
  };
  index: number;
  mobile: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<Props> = ({ nav, index, mobile, onClick }) => {
  const location = useLocation();

  if (mobile) {
    return (
      <li onClick={onClick}>
        <Link
          to={nav.path}
          className="flex flex-col text-center font-semibold text-xl group"
        >
          <NavIcon path={nav.path} item={nav.item} />
          <span
            className={`group-hover:text-aqua duration-300 ${
              location.pathname === nav.path ? "text-aqua" : ""
            }`}
          >
            {nav.item}
          </span>
        </Link>
      </li>
    );
  }

  return (
    <li className="overflow-hidden group">
      <motion.div variants={linkVariants.variants}>
        <Link
          to={nav.path}
          className="font-semibold flex items-center space-x-2 group-hover:text-aqua "
        >
          <NavIcon path={nav.path} item={nav.item} />
          <span
            className={`duration-300 text-[17px] ${
              location.pathname === nav.path ? "text-aqua" : ""
            }`}
          >
            {nav.item}
          </span>
        </Link>
      </motion.div>
    </li>
  );
};

export default NavLink;
