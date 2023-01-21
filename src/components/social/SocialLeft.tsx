import { motion } from "framer-motion";
import { parentVariants } from "../../animation/social-motion";
import { socials } from "../../content";
import Social from "./Social";

const SocialLeft = () => {
  return (
    <nav className="hidden md:block absolute left-0 pl-10 md:pl-16 lg:pl-20 bottom-0 z-20">
      <motion.ul
        className=" flex flex-col justify-center space-y-6
        after:h-[90px] after:w-[1px] after:bg-gray after:content-[''] after:block after:mx-auto after:mt-6"
        variants={parentVariants.variants}
        initial="initial"
        animate="animate"
      >
        {socials.map((social) => (
          <Social key={social.name} name={social.name} link={social.link} />
        ))}
      </motion.ul>
    </nav>
  );
};

export default SocialLeft;
