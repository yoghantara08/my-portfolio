import { IProject } from "../../content";
import TagButton from "../button/TagButton";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { projectVariants } from "../../animation/projects-motion";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { image, tags, description, title, demo, github } = project;

  return (
    <motion.li
      className="rounded bg-slate-900 shadow-shadowEven w-full inline-block mb-5 group cursor-default"
      variants={projectVariants.variants}
    >
      <div className="relative w-full ">
        <img src={image} alt={title} className="rounded-t" />
        <div
          className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] text-white 
          flex justify-center items-center space-x-4 z-10 text-4xl opacity-0 group-hover:opacity-100 duration-300"
        >
          <a
            href={github}
            title="Go to repository"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          {demo && (
            <a href={demo} title="Go to demo" target="_blank" rel="noreferrer">
              <FaEye />
            </a>
          )}
        </div>
      </div>
      <div className="px-4 pt-3 pb-5">
        <h3 className="text-white uppercase font-bold font-roboto ">{title}</h3>
        <p className="font-montserrat py-1">{description}</p>
        <div className="">
          {tags.map((tag) => (
            <TagButton key={tag}>{tag}</TagButton>
          ))}
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
