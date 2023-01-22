import Bootstrap from "../logo/Bootstrap";
import CSS from "../logo/CSS";
import Firebase from "../logo/Firebase";
import Git from "../logo/Git";
import HTML from "../logo/HTML";
import Java from "../logo/Java";
import JavaScript from "../logo/JavaScript";
import MySQL from "../logo/MySQL";
import ReactJs from "../logo/ReactJs";
import Spring from "../logo/Spring";
import Tailwind from "../logo/Tailwind";
import TypeScript from "../logo/TypeScript";

interface Props {
  logo: string;
}

const SkillCard: React.FC<Props> = ({ logo }) => {
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
  }

  return (
    <div className="text-center py-3 px-6 shadow-shadowEven bg-slate-900 rounded-md">
      {skillLogo}
      <p className="mt-3 font-semibold">{logo}</p>
    </div>
  );
};

export default SkillCard;
