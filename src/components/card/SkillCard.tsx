import { motion } from "framer-motion";
import { skillVariants } from "../../animation/skills-motion";
import Bootstrap from "../logo/Bootstrap";
import CSS from "../logo/CSS";
import Express from "../logo/Express";
import Firebase from "../logo/Firebase";
import Git from "../logo/Git";
import HTML from "../logo/HTML";
import Java from "../logo/Java";
import JavaScript from "../logo/JavaScript";
import MongoDb from "../logo/MongoDb";
import MySQL from "../logo/MySQL";
import NodeJs from "../logo/NodeJs";
import ReactJs from "../logo/ReactJs";
import Spring from "../logo/Spring";
import Tailwind from "../logo/Tailwind";
import TypeScript from "../logo/TypeScript";

interface Props {
  logo: string;
  link: string;
}

const SkillCard: React.FC<Props> = ({ logo, link }) => {
  let skillLogo;

  switch (logo) {
    case "HTML":
      skillLogo = <HTML />;
      break;
    case "CSS":
      skillLogo = <CSS />;
      break;
    case "JavaScript":
      skillLogo = <JavaScript />;
      break;
    case "TypeScript":
      skillLogo = <TypeScript />;
      break;
    case "Java":
      skillLogo = <Java />;
      break;
    case "MySQL":
      skillLogo = <MySQL />;
      break;
    case "React":
      skillLogo = <ReactJs />;
      break;
    case "Spring":
      skillLogo = <Spring />;
      break;
    case "Tailwindcss":
      skillLogo = <Tailwind />;
      break;
    case "Bootstrap":
      skillLogo = <Bootstrap />;
      break;
    case "Git":
      skillLogo = <Git />;
      break;
    case "Firebase":
      skillLogo = <Firebase />;
      break;
    case "NodeJs":
      skillLogo = <NodeJs />;
      break;
    case "MongoDB":
      skillLogo = <MongoDb />;
      break;
    case "Express":
      skillLogo = <Express />;
      break;
  }

  return (
    <motion.a
      target="_blank"
      rel="noreferrer"
      href={link}
      variants={skillVariants.variants}
    >
      <div className="text-center py-3 px-6 shadow-shadowEven bg-slate-900 hover:bg-slate-800 rounded-md">
        {skillLogo}
        <p className="mt-3 font-semibold">{logo}</p>
      </div>
    </motion.a>
  );
};

export default SkillCard;
