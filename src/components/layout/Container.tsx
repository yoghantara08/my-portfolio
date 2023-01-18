import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center mt-32 pb-64 h-full">
      <div className="mx-6 md:mx-32 w-full h-full lg:max-w-7xl border">
        {children}
      </div>
    </div>
  );
};

export default Container;
