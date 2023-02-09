import Button from "../components/button/Button";
import ProjectCard from "../components/card/ProjectCard";
import Container from "../components/layout/Container";
import { projects, socials } from "../content";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  skillTitle2Variants,
  skillTitleVariants,
} from "../animation/skills-motion";
import { projectsVariants } from "../animation/projects-motion";

const Projects = () => {
  return (
    <Container>
      <main className="flex flex-col text-slate-400 mx-6 md:mx-10 lg:mx-24 mt-0 md:mt-12">
        <motion.h1
          className="font-extrabold text-3xl md:text-4xl mb-3 text-aqua font-roboto relative w-fit
          after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
          variants={skillTitleVariants.variants}
        >
          Projects
        </motion.h1>
        <motion.h2
          className="font-bold text-2xl md:text-3xl font-roboto mt-2"
          variants={skillTitle2Variants.variants}
        >
          Some of my works that I've built.
        </motion.h2>
        <motion.ul
          className="mt-7 columns-1 lg:columns-2 xl:columns-3 gap-5"
          variants={projectsVariants.variants}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.ul>
        <div className="flex justify-center mt-4">
          <a href={socials[0].link} target="_blank" rel="noreferrer">
            <Button className="w-fit flex items-center text-lg">
              <span className="mr-2">More Projects</span>
              <FiExternalLink />
            </Button>
          </a>
        </div>
      </main>
    </Container>
  );
};

export default Projects;
