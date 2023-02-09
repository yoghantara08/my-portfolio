import { motion } from "framer-motion";
import {
  skillsVariants,
  skillTitle2Variants,
  skillTitleVariants,
} from "../animation/skills-motion";
import SkillCard from "../components/card/SkillCard";
import Container from "../components/layout/Container";
import { skills } from "../content";

const Skills = () => {
  return (
    <Container>
      <main className="flex flex-col text-slate-400 mx-6 md:mx-10 lg:mx-24 mt-0 md:mt-4">
        <motion.h1
          className="font-extrabold text-3xl md:text-4xl mb-3 text-aqua font-roboto relative w-fit
          after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
          variants={skillTitleVariants.variants}
        >
          Skills
        </motion.h1>
        <motion.h2
          className="font-bold text-2xl md:text-3xl font-roboto"
          variants={skillTitle2Variants.variants}
        >
          Things that I've worked with
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 mt-8"
          variants={skillsVariants.variants}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.logo} logo={skill.logo} link={skill.link} />
          ))}
        </motion.div>
      </main>
    </Container>
  );
};

export default Skills;
