import { MotionProps } from "framer-motion";

export const skillTitleVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: "easeOut" } },
  },
};

export const skillTitle2Variants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeIn", delay: 0.4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
    },
  },
};

export const skillsVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.8, delayChildren: 0.8, staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.8 },
    },
  },
};

export const skillVariants: MotionProps = {
  variants: {
    initial: { opacity: 0, y: "1vw" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  },
};
