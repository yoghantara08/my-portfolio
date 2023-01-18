import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center mt-32 h-full">
      <div className="mx-4 lg:mx-6 w-full lg:max-w-7xl">{children}</div>
    </div>
  );
};

export default Container;
