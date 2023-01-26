import { motion } from "framer-motion";
import { emailsVariants, emailVariants } from "../../animation/social-motion";

const SocialRight = () => {
  return (
    <nav className="hidden md:block absolute left-auto right-[40px] bottom-0 z-20 w-[40px] h-fit">
      <motion.ul
        className="flex flex-col justify-center items-center
        after:h-[90px] after:w-[1px] after:bg-gray after:content-[''] 
        after:block after:mx-auto after:mt-6"
        variants={emailsVariants.variants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          href="mailto:gyoghantara@gmail.com"
          className="mb-24 relative block font-roboto text-[13.5px] text-gray 
          tracking-widest hover:text-aqua hover:-translate-y-1 duration-200"
          variants={emailVariants.variants}
        >
          gyoghantara@gmail.com
        </motion.a>
      </motion.ul>
    </nav>
  );
};

export default SocialRight;
