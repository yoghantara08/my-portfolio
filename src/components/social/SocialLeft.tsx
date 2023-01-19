import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../animation/social";
import Discord from "./Discord";
import GitHub from "./GitHub";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

interface Socials {
  name: string;
  logo: JSX.Element;
  link: string;
}

const socials: Socials[] = [
  { name: "GitHub", logo: <GitHub />, link: "https://github.com/yoghantara08" },
  {
    name: "LinkedIn",
    logo: <LinkedIn />,
    link: "https://www.linkedin.com/in/yoghantara/",
  },
  {
    name: "Instagram",
    logo: <Instagram />,
    link: "https://www.instagram.com/gustutyoghantara/",
  },
  {
    name: "Discord",
    logo: <Discord />,
    link: "https://discordapp.com/users/853617679588261899",
  },
  { name: "Twitter", logo: <Twitter />, link: "https://twitter.com/kusho08" },
];

const SocialLeft = () => {
  return (
    <nav className="hidden md:block absolute left-0 pl-10 lg:pl-20 bottom-0">
      <motion.ul
        className=" flex flex-col justify-center space-y-6
        after:h-[90px] after:w-[1px] after:bg-gray after:content-[''] after:block after:mx-auto after:mt-6"
        variants={parentVariants}
        initial="initial"
        animate="animate"
      >
        {socials.map((social) => (
          <motion.li variants={childrenVariants}>
            <motion.a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="block"
              whileHover={{ translateY: -2 }}
            >
              {social.logo}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default SocialLeft;
