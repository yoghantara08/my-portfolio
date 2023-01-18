// Navbar
export const navbarVariants = {
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
};

export const menuVariants = {};

export const linkVariants = {};

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
