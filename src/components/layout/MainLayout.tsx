import React from "react";
import useHandleScroll from "../../hooks/useHandleScroll";
import Navbar from "../navigation/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { handleScroll, visible, yOffset } = useHandleScroll();

  return (
    <div
      className="bg-black h-screen w-screen overflow-x-hidden text-white"
      onScroll={handleScroll}
    >
      <Navbar visible={visible} yOffset={yOffset} />
      {children}
    </div>
  );
};

export default MainLayout;
