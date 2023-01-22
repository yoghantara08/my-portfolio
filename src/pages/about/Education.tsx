import Certificates from "./Certificates";
import EducationList from "./EducationList";

const Education = () => {
  return (
    <section className="w-full mt-24 ">
      <h1
        className="font-extrabold text-4xl mb-10 text-aqua font-roboto relative w-fit
        after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full md:mx-24 lg:mx-10 xl:mx-0"
      >
        Education
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 md:mx-24 lg:mx-10 xl:mx-0">
        <EducationList />
        <Certificates />
      </div>
    </section>
  );
};

export default Education;
