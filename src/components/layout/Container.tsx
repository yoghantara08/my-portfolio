import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="flex justify-center mt-32 font-inter">
      <div
        className={`mx-3 md:mx-32 w-full min-h-[694px] lg:max-w-7xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
