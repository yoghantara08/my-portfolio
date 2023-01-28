import { motion } from "framer-motion";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  buttonsVariants,
  buttonVariants,
  hiVariants,
  letterVariants,
  nameVariants,
  sloganVariants,
} from "../animation/home-motion";
import { resume } from "../assets";
import Button from "../components/button/Button";
import Container from "../components/layout/Container";
import { myname1 } from "../content";

const Home = () => {
  return (
    <Container className="flex justify-center items-center">
      <main className="mx-6 -mt-14 md:text-center">
        <motion.h3
          className="md:text-lg font-roboto text-aqua mb-3"
          variants={hiVariants.variants}
        >
          Hi Everyone, my name is
        </motion.h3>

        <motion.h1
          className="font-bold text-slate-300 text-6xl md:text-7xl mb-5"
          variants={nameVariants.variants}
        >
          {myname1.map((n, index) => (
            <motion.span key={index} variants={letterVariants.variants}>
              {n}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="font-bold font-roboto text-slate-400 text-3xl md:text-3xl mb-5"
          variants={sloganVariants.variants}
        >
          I like turning ideas into reality
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row justify-center md:items-center"
          variants={buttonsVariants.variants}
        >
          <motion.div variants={buttonVariants.variants}>
            <Button type="button" className="space-x-4 mt-5 mr-0 md:mr-6 w-fit">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <p>Download Resume</p>
                <AiOutlineCloudDownload className="w-[30px] h-[30px] pt-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants.variants}>
            <Button type="button" className="mt-5 w-fit space-x-3">
              <Link to="/contact" className="flex items-center">
                <p>Contact Me</p>
                <FaTelegramPlane className="w-[30px] h-[30px] pt-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </Container>
  );
};

export default Home;
