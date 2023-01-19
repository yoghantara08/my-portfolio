import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden">{children}</div>
  );
};

export default MainLayout;
