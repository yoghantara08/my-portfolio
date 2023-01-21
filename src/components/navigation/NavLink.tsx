import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { linkVariants } from "../../animation/nav-motion";

interface Props {
  nav: {
    path: string;
    item: "Home" | "About" | "Skills" | "Project" | "Contact";
  };
  index: number;
  mobile: boolean;
}

const NavLink: React.FC<Props> = ({ nav, index, mobile }) => {
  if (mobile) {
    return (
      <li>
        <Link
          to={nav.path}
          className="flex flex-col text-center font-semibold text-xl group"
        >
          <span className="text-lg text-aqua">0{index + 1}. </span>
          <span className="group-hover:text-aqua duration-300">{nav.item}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="overflow-hidden">
      <motion.div variants={linkVariants.variants}>
        <Link to={nav.path} className="font-semibold  group">
          <span className="text-aqua">0{index + 1}. </span>
          <span className="group-hover:text-aqua duration-300">{nav.item}</span>
        </Link>
      </motion.div>
    </li>
  );
};

export default NavLink;
