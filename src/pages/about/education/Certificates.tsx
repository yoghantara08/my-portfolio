import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { useInView } from "react-intersection-observer";
import { rightSlideVariants } from "../../../animation/about-motion";
import { certificate } from "../../../content";

const Certificates = () => {
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
      className="space-y-5 mt-10 lg:mt-0"
      variants={rightSlideVariants.variants}
      ref={ref}
      initial="initial"
      animate={controls}
      exit="exit"
    >
      {certificate.map((cer) => (
        <li className="flex flex-col lg:flex-row" key={cer.name}>
          <div className="flex">
            <TiArrowRightOutline className="text-2xl mr-3 text-red" />
            <div className="space-y-2">
              <h4 className="text-red text-lg font-bold">{cer.name}</h4>
              <div className="flex items-center ">
                <p className="py-1 px-2  bg-slate-900 rounded-md w-fit mr-3">
                  {cer.timeline}
                </p>
                <p>{cer.from}</p>
              </div>
              {/* <a
                href={cer.credential}
                target="_blank"
                rel="noreferrer"
                className="ml-1 flex items-center text-aqua w-fit"
              >
                <span className="mr-2">Credential</span>
                <FiExternalLink />
              </a> */}
            </div>
          </div>
          <img
            src={cer.pic}
            alt={cer.alt}
            className="mx-10 sm:mx-20 lg:mx-0 mt-5 lg:mt-0 lg:w-[210px] lg:h-[170px] rounded"
          />
        </li>
      ))}
    </motion.ul>
  );
};

export default Certificates;
