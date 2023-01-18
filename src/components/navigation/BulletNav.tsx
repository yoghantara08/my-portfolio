import { motion } from "framer-motion";
import { BsFillDiamondFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const navLink: { id: number; path: string }[] = [
  { id: 1, path: "/" },
  { id: 2, path: "/about" },
  { id: 3, path: "/skills" },
  { id: 4, path: "/project" },
  { id: 5, path: "/contact" },
];

const BulletNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden absolute top-0 bottom-0 right-0 pr-20 md:flex justify-center flex-col mb-20">
      <ul className="space-y-20">
        {navLink.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.path} className="flex justify-center items-center">
              <span className="pb-1 pr-5">home</span>
              <BsFillDiamondFill
                fill={`${
                  location.pathname === nav.path ? "#00c6bc" : "currentColor"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BulletNav;
