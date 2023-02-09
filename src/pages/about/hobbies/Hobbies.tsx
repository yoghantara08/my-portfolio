import { useAnimationControls, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";
import { FaCode, FaMusic } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { HobbiesArr } from "../../../content";
import Hobby from "./Hobby";
import {
  fadedInVariants,
  titleVariants,
} from "../../../animation/about-motion";
import useWindowSize from "../../../hooks/useWindowSize";

const Hobbies = () => {
  const [selectedTab, setSelectedTab] = useState(HobbiesArr[0]);
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
          className="font-extrabold text-2xl sm:text-4xl mb-3 text-aqua font-roboto relative w-fit
          after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
          ref={ref}
          variants={titleVariants.variants}
          initial="initial"
          animate={controls}
          exit="exit"
        >
          Interest & Hobbies
        </motion.h1>
      </div>
      <motion.section
        className="mt-6 md:mx-24 lg:mx-10 xl:mx-0 rounded shadow-shadowEven"
        ref={ref}
        variants={fadedInVariants.variants}
        initial="initial"
        animate={controls}
        exit="exit"
      >
        <ul
          className="mb-5 py-4 px-0 md:px-12 md:py-6 
          flex justify-between text-gray text-lg md:text-xl font-bold 
          overflow-scroll bg-slate-900"
        >
          {HobbiesArr.map((item) => (
            <li
              key={item.hobby}
              className={`flex justify-center min-w-[220px] ${
                item === selectedTab ? "text-red" : ""
              }`}
              onClick={() => setSelectedTab(item)}
            >
              <div className="flex items-center cursor-pointer w-fit">
                {item.icon === "game" && (
                  <IoGameControllerOutline className="mr-3" />
                )}
                {item.icon === "code" && <FaCode className="mr-3" />}
                {item.icon === "music" && <FaMusic className="mr-3" />}
                {item.hobby}
              </div>
            </li>
          ))}
        </ul>
        <AnimatePresence mode="wait">
          {selectedTab ? (
            <Hobby
              key={selectedTab.hobby}
              hobby={selectedTab.hobby}
              description={selectedTab.description}
              description2={selectedTab.description2}
              pic={selectedTab.pic}
              picText={selectedTab.picText}
            />
          ) : (
            ""
          )}
        </AnimatePresence>
      </motion.section>
    </section>
  );
};

export default Hobbies;
