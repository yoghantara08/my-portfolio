import { useState } from "react";

const useHandleScroll = () => {
  const [yOffset, setYOffset] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = (e: React.UIEvent) => {
    const currentYOffset = e.currentTarget.scrollTop;
    if (currentYOffset < yOffset) {
      setVisible(true);
    }

    if (currentYOffset > yOffset) {
      setVisible(false);
    }

    setYOffset(currentYOffset);
  };

  return { visible, yOffset, handleScroll };
};

export default useHandleScroll;
