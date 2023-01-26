import { motion } from "framer-motion";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { homeVariants } from "../animation/home-motion";
import { resume } from "../assets";
import Button from "../components/button/Button";
import Container from "../components/layout/Container";

const Home = () => {
  return (
    <Container
      className="flex justify-center items-center"
      animation={homeVariants}
    >
      <main className="mx-6 -mt-14 text-center">
        <motion.h4 className="text-md font-roboto text-aqua mb-3">
          Hi Everyone, my name is
        </motion.h4>
        <h1 className="font-bold text-slate-300 text-6xl md:text-7xl mb-5">
          Gustut Yoghantara
        </h1>
        <h2 className="font-bold text-slate-400 text-3xl md:text-5xl mb-5">
          I like turning ideas into reality
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="mt-5 mr-0 md:mr-6 w-fit"
          >
            <Button type="button" className="flex items-center space-x-4">
              <p>Download Resume</p>
              <AiOutlineCloudDownload className="w-[30px] h-[30px] pt-1" />
            </Button>
          </a>
          <Link to="/contact" className="mt-5 w-fit">
            <Button type="button" className=" flex items-center space-x-3">
              <p>Contact Me</p>
              <FaTelegramPlane className="w-[30px] h-[30px] pt-1" />
            </Button>
          </Link>
        </div>
      </main>
    </Container>
  );
};

export default Home;
