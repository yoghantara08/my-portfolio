import { motion } from "framer-motion";
import { backdropVariants } from "../../animation/variants";
const Backdrop = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-full backdrop-blur-sm 
        backdrop-brightness-200"
      variants={backdropVariants}
      initial="closed"
      animate="opened"
      exit="exit"
    />
  );
};

export default Backdrop;
