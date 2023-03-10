import { motion } from "framer-motion";
import {
  leftSlideVariants,
  rightSlideVariants,
  titleVariants,
} from "../../../animation/about-motion";

import { aboutme } from "../../../assets";
import { aboutMe } from "../../../content";

const AboutMe = () => {
  return (
    <section className="md:mx-24 lg:mx-0">
      <motion.h1
        className="font-extrabold text-4xl mb-3 text-aqua font-roboto relative w-fit
        after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
        variants={titleVariants.variants}
      >
        <span>About </span>
        <span>Me</span>
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:justify-start md:items-start">
        <motion.div
          className="space-y-3 max-w-[500px] text-[17px] text-justify"
          variants={leftSlideVariants.variants}
        >
          <p>{aboutMe.paragraph1}</p>
          <p>{aboutMe.paragraph2}</p>
        </motion.div>
        <motion.picture
          className="max-w-[300px] max-h-[300px] relative
          after:content-[''] after:block after:absolute after:top-6 after:left-6 after:z-0
          after:border-2 after:border-aqua after:rounded-md after:w-full after:h-full
          hover:after:top-4 hover:after:left-4 hover:after:duration-300"
          variants={rightSlideVariants.variants}
        >
          <img
            src={aboutme}
            alt="yoghantara"
            className="relative z-10 rounded-md"
          />
        </motion.picture>
      </div>
    </section>
  );
};

export default AboutMe;
