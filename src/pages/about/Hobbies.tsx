import { useState } from "react";
import { FaCode, FaMusic } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { HobbiesArr } from "../../content";
import Hobby from "./Hobby";

const Hobbies = () => {
  const [selectedTab, setSelectedTab] = useState(HobbiesArr[0]);

  return (
    <section className="mt-48 w-full">
      <div className="flex justify-center">
        <h1
          className="font-extrabold text-2xl sm:text-4xl mb-3 text-aqua font-roboto relative w-fit
        after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
        >
          Interest & Hobbies
        </h1>
      </div>
      <section className="mt-6 md:mx-24 lg:mx-10 xl:mx-0 rounded shadow-shadowEven">
        <ul
          className="mb-5 py-4 px-0 md:px-12 md:py-6 
          flex justify-between text-gray text-lg md:text-xl font-bold 
          overflow-scroll bg-slate-900"
        >
          {HobbiesArr.map((item) => (
            <li
              key={item.hobby}
              className={`flex justify-center min-w-[262px] ${
                item === selectedTab ? "text-red" : ""
              }`}
              onClick={() => setSelectedTab(item)}
            >
              <div className="flex items-center cursor-pointer w-fit">
                {item.icon === "game" && (
                  <IoGameControllerOutline className="mr-3" />
                )}
                {item.icon === "code" && <FaCode className="mr-3" />}
                {item.icon === "music" && <FaMusic className="mr-3" />}
                {item.hobby}
              </div>
            </li>
          ))}
        </ul>
        {selectedTab ? (
          <Hobby
            key={selectedTab.hobby}
            hobby={selectedTab.hobby}
            description={selectedTab.description}
            description2={selectedTab.description2}
            pic={selectedTab.pic}
            picText={selectedTab.picText}
          />
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default Hobbies;
