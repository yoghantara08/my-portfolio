import { MotionProps } from "framer-motion";

export const socialsVariants: MotionProps = {
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

export const emailsVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.5,
        delayChildren: 2.5,
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
