import { MotionProps } from "framer-motion";

export const hiVariants: MotionProps = {
  variants: {
    initial: { y: "-5vw", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeOut",
      },
    },
  },
};

export const nameVariants: MotionProps = {
  variants: {
    animate: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.06,
      },
    },
    exit: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.03,
      },
    },
  },
};

export const letterVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
};

export const sloganVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
};

export const buttonsVariants: MotionProps = {
  variants: {
    animate: {
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
      },
    },
    exit: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  },
};

export const buttonVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
};
