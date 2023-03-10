import { motion } from "framer-motion";
import { footerVariants } from "../../animation/nav-motion";
import { links } from "../../content";

import SocialFooter from "../social/SocialFooter";

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col mt-12 md:mt-20 justify-center items-center w-screen font-roboto"
      variants={footerVariants.variants}
      initial="initial"
      animate="animate"
    >
      <SocialFooter />
      <a
        href={links.portfolio}
        target="_blank"
        rel="noreferrer"
        className="text-gray text-sm pb-4 md:pb-5 cursor-pointer group hover:text-aqua"
      >
        Developed by{" "}
        <span className="text-gray group-hover:text-aqua">
          Gustut Yoghantara
        </span>{" "}
        | 2023
      </a>
    </motion.footer>
  );
};

export default Footer;
