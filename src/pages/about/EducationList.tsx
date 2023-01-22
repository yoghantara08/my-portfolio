import { education } from "../../content";
import { TiArrowRightOutline } from "react-icons/ti";

const EducationList = () => {
  return (
    <ul className="space-y-5">
      {education.map((edu) => (
        <li className="flex" key={edu.school}>
          <TiArrowRightOutline className="text-2xl mr-3 text-red" />
          <div className="space-y-2">
            <h4 className="text-red text-lg font-bold">{edu.school}</h4>
            <div className="flex items-center ">
              <p className="py-1 px-2  bg-slate-900 rounded-md w-fit mr-3">
                {edu.timeline}
              </p>
              <p>{edu.place}</p>
            </div>
            <p className="ml-1">{edu.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EducationList;
