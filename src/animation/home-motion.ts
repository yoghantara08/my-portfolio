import { MotionProps } from "framer-motion";

export const homeVariants: MotionProps = {
  variants: {
    initial: { opacity: 0, x: "-100vw", scale: 0 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        ease: "easeInOut",
        duration: 1,
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { when: "afterChildren", ease: "easeIn", duration: 1 },
    },
  },
};

export const hiVariants: MotionProps = {
  variants: {
    initial: { x: "-100vw", y: "100px", rotate: 90 },
    animate: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: "circOut" },
    },
    exit: {
      x: "-100vw",
      y: "100px",
      rotate: -90,
      transition: {
        ease: "easeOut",
      },
    },
  },
};
