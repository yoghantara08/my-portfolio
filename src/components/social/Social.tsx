import { motion } from "framer-motion";
import { childrenVariants } from "../../animation/social-motion";
import { ISocials } from "../../content";
import Discord from "./IconDiscord";
import GitHub from "./IconGitHub";
import Instagram from "./IconInstagram";
import LinkedIn from "./IconLinkedIn";
import Twitter from "./IconTwitter";

const Social: React.FC<ISocials> = ({ name, link }) => {
  let icon;

  switch (name) {
    case "GitHub":
      icon = <GitHub />;
      break;
    case "Discord":
      icon = <Discord />;
      break;
    case "Instagram":
      icon = <Instagram />;
      break;
    case "LinkedIn":
      icon = <LinkedIn />;
      break;
    case "Twitter":
      icon = <Twitter />;
      break;
  }

  return (
    <motion.li variants={childrenVariants.variants}>
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block"
        whileHover={{ translateY: -2 }}
      >
        {icon}
      </motion.a>
    </motion.li>
  );
};

export default Social;
