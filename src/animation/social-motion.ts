import { MotionProps } from "framer-motion";

export const parentVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 3,
        delayChildren: 3,
        staggerChildren: 0.2,
      },
    },
  },
};

export const childrenVariants: MotionProps = {
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
};
