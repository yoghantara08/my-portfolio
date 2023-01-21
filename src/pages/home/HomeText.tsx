import React from "react";

const HomeText = () => {
  return (
    <p className="w-full font-medium md:max-w-[570px] text-slate-400">
      I'm a passionate Software Engineer, always eager to take on new challenges
      and push my skills to the limit. Currently, I'm studying at{" "}
      <a
        href="https://www.lithan.com/"
        className="text-aqua hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Lithan EduClass
      </a>{" "}
      majoring in Applied Degree in Software Engineering and at{" "}
      <a
        href="https://stikom-bali.ac.id/"
        className="text-aqua hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        ITB STIKOM Bali
      </a>{" "}
      majoring in Information Systems.
    </p>
  );
};

export default HomeText;
