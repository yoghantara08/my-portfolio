import SkillCard from "../components/card/SkillCard";
import Container from "../components/layout/Container";
import { skills } from "../content";

const Skills = () => {
  return (
    <Container>
      <main className="flex flex-col text-slate-400 mx-6 md:mx-10 lg:mx-24 mt-0 md:mt-12">
        <h1
          className="font-extrabold text-4xl md:text-6xl mb-3 text-aqua font-roboto relative w-fit
        after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
        >
          Skills
        </h1>
        <h2 className="font-bold text-2xl md:text-3xl font-roboto">
          Things that I've worked with
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 mt-8">
          {skills.map((skill) => (
            <SkillCard key={skill.logo} logo={skill.logo} />
          ))}
        </div>
      </main>
    </Container>
  );
};

export default Skills;
