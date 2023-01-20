export const backdropVariants = {
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
};
