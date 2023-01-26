import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [yOffset, setYOffset] = useState<number>(window.scrollY);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentYOffset = window.scrollY;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  };

  return visible;
};

export default useScrollDirection;
