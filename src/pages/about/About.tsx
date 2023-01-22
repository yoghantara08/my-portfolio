import Container from "../../components/layout/Container";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Hobbies from "./Hobbies";

const About = () => {
  return (
    <Container>
      <main className="flex flex-col items-center text-slate-400 mx-6 md:mx-10 lg:mx-24 mt-0 md:mt-12">
        <AboutMe />
        <Hobbies />
        <Education />
      </main>
    </Container>
  );
};

export default About;
