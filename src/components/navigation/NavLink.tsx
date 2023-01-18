import { Link } from "react-router-dom";

interface Props {
  nav: { path: string; item: string };
  index: number;
  mobile: boolean;
}

const NavLink: React.FC<Props> = ({ nav, index, mobile }) => {
  if (mobile) {
    return (
      <li>
        <Link to={nav.path} className="font-semibold text-xl ">
          <span className="text-lg text-aqua">0{index + 1}. </span>
          {nav.item}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link to={nav.path} className="font-semibold text-lg ">
        <span className="text-sm text-aqua">0{index + 1}. </span>
        {nav.item}
      </Link>
    </li>
  );
};

export default NavLink;
