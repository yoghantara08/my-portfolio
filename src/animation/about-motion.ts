import { MotionProps } from "framer-motion";

export const titleVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
};

export const leftSlideVariants: MotionProps = {
  variants: {
    initial: { opacity: 0, x: "-5vw" },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.4 },
    },
    exit: {
      opacity: 0,
      x: "-5vw",
      transition: {
        delay: 0.3,
        ease: "easeOut",
      },
    },
  },
};

export const rightSlideVariants: MotionProps = {
  variants: {
    initial: { opacity: 0, x: "5vw" },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.6 },
    },
    exit: {
      opacity: 0,
      x: "5vw",
      transition: {
        delay: 0.6,
        ease: "easeOut",
      },
    },
  },
};

export const fadedInVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.6 },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.6,
        ease: "easeOut",
      },
    },
  },
};

export const hobbyVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  },
};
