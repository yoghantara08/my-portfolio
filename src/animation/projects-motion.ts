import { MotionProps } from "framer-motion";

export const projectsVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.8, delayChildren: 0.8, staggerChildren: 0.25 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.8 },
    },
  },
};

export const projectVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.35 },
    },
  },
};
