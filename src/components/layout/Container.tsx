import { motion, MotionProps } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: MotionProps;
}

const Container: React.FC<Props> = ({ children, className, animation }) => {
  return (
    <motion.div
      className="flex justify-center mt-32 font-lato"
      variants={animation?.variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        className={`mx-3 md:mx-32 w-full min-h-[694px] lg:max-w-7xl ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Container;
