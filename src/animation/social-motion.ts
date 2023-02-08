import { MotionProps } from "framer-motion";

export const emailsVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 2,
        delayChildren: 2,
        staggerChildren: 0.2,
      },
    },
  },
};

export const emailVariants: MotionProps = {
  variants: {
    initial: { opacity: 0, y: -100, rotate: 90 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  },
};

export const socialsVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.9,
        delayChildren: 3,
        staggerChildren: 0.2,
      },
    },
  },
};

export const socialVariants: MotionProps = {
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
