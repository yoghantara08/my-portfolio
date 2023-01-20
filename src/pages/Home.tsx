import { resume } from "../assets";
import Button from "../components/button/Button";
import Container from "../components/layout/Container";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="bg-[#131722] shadow-shadowEven">
      <main className="mx-6 md:mx-10 lg:mx-20 mt-16 md:mt-24 lg:mt-32 mb-12">
        <h4 className="text-md font-roboto text-aqua">
          Hi Everyone, my name is
        </h4>
        <h1
          style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
          className="font-bold -mt-1 lg:-mt-5 text-slate-300"
        >
          <span>y</span>
          <span>o</span>
          <span>g</span>
          <span>h</span>
          <span>a</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>r</span>
          <span>a.</span>
        </h1>
        <h2
          style={{ fontSize: "clamp(30px, 6vw, 55px)" }}
          className="text-slate-400 font-bold mb-2 -mt-1"
        >
          I like turning ideas into reality.
        </h2>
        <p className="w-full md:max-w-[600px] text-slate-400 ml-1">
          I'm a passionate Software Engineer, always eager to take on new
          challenges and push my skills to the limit. Currently, I'm studying at{" "}
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
        <div className="flex flex-col md:flex-row">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="mt-5 ml-0 md:ml-1 mr-0 md:mr-3 w-fit"
          >
            <Button type="button" className=" flex items-center space-x-3">
              <p>Download Resume</p>
              <AiOutlineCloudDownload className="w-[30px] h-[30px] pt-1" />
            </Button>
          </a>
          <Link to="/contact" className="mt-5 ml-0 md:ml-1 w-fit">
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
