import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      className="flex justify-center mt-24 md:mt-32 font-lato"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        className={`mx-3 md:mx-32 w-full min-h-[694px] lg:max-w-7xl ${className} `}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Container;
