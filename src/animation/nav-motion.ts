import { MotionProps } from "framer-motion";

// Navbar
export const navbarVariants: MotionProps = {
  variants: {
    closed: {
      x: "100vw",
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut", duration: 0.7 },
    },
  },
};

export const logoVariants: MotionProps = {
  variants: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
  },
};

export const linksVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  },
};

export const linkVariants: MotionProps = {
  variants: {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
  },
};

export const backdropVariants: MotionProps = {
  variants: {
    closed: {
      opacity: 0,
    },
    opened: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.7 },
    },
  },
};

export const bulletNavVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
      },
    },
  },
};

export const bulletVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
  },
};

export const diamondVariants: MotionProps = {
  variants: {
    hover: { scale: 1.2 },
    tap: { translateY: -6 },
  },
};

export const footerVariants: MotionProps = {
  variants: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 4.5 } },
  },
};
