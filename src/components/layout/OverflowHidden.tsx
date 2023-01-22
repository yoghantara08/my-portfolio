import React from "react";

const OverflowHidden: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="overflow-hidden w-fit h-fit relative">{children}</div>;
};

export default OverflowHidden;
