import React, { useState } from "react";
import Navbar from "../navigation/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [yOffset, setYOffset] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div
      className="bg-black h-screen w-screen overflow-x-hidden text-white"
      onScroll={(e) => {
        const currentYOffset = e.currentTarget.scrollTop;
        if (currentYOffset < yOffset) {
          setVisible(true);
        }

        if (currentYOffset > yOffset) {
          setVisible(false);
        }

        setYOffset(currentYOffset);
      }}
    >
      <Navbar visible={visible} yOffset={yOffset} />
      {children}
    </div>
  );
};

export default MainLayout;
