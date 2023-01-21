import { motion } from "framer-motion";
import { backdropVariants } from "../../animation/nav-motion";

const Backdrop = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-full backdrop-blur-sm z-20"
      variants={backdropVariants.variants}
      initial="closed"
      animate="opened"
      exit="exit"
    />
  );
};

export default Backdrop;
