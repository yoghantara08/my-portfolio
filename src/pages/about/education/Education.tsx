import Certificates from "./Certificates";
import EducationList from "./EducationList";
import { useAnimationControls, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { titleVariants } from "../../../animation/about-motion";
import useWindowSize from "../../../hooks/useWindowSize";

const Education = () => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView();
  const { desktop, mobile } = useWindowSize();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <section className={`w-full ${desktop && "mt-48"} ${mobile && "mt-28"}`}>
      <div className="flex justify-center">
        <motion.h1
          className="font-extrabold text-4xl mb-10 text-aqua font-roboto relative w-fit
          after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full md:mx-24 lg:mx-10 xl:mx-0"
          ref={ref}
          variants={titleVariants.variants}
          initial="initial"
          animate={controls}
          exit="exit"
        >
          Education
        </motion.h1>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 md:mx-24 lg:mx-10 xl:mx-0">
        <EducationList />
        <Certificates />
      </div>
    </section>
  );
};

export default Education;
