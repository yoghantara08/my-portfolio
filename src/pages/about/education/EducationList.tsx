import { useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../../../content";
import { TiArrowRightOutline } from "react-icons/ti";
import { leftSlideVariants } from "../../../animation/about-motion";

const EducationList = () => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.set("initial");
    }
  }, [controls, inView]);

  return (
    <motion.ul
      className="space-y-5"
      ref={ref}
      variants={leftSlideVariants.variants}
      initial="initial"
      animate={controls}
      exit="exit"
    >
      {education.map((edu) => (
        <li className="flex" key={edu.school}>
          <TiArrowRightOutline className="text-2xl mr-3 text-red" />
          <div className="space-y-2">
            <h4 className="text-red text-lg font-bold">{edu.school}</h4>
            <div className="flex items-center ">
              <p className="py-1 px-2  bg-slate-900 rounded-md w-fit mr-3">
                {edu.timeline}
              </p>
              <p>{edu.place}</p>
            </div>
            <p className="ml-1">{edu.description}</p>
          </div>
        </li>
      ))}
    </motion.ul>
  );
};

export default EducationList;
