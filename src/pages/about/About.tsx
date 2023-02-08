import { useEffect, useState } from "react";
import Container from "../../components/layout/Container";
import useWindowSize from "../../hooks/useWindowSize";
import AboutMe from "./aboutme/AboutMe";
import Education from "./education/Education";
import Hobbies from "./hobbies/Hobbies";

const About = () => {
  const { desktop, mobile } = useWindowSize();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (desktop) {
      setTimeout(() => {
        setLoaded(true);
      }, 700);
    }

    if (mobile) {
      setLoaded(true);
    }
  }, [desktop, mobile]);

  return (
    <Container>
      <main className="flex flex-col items-center text-slate-400 mx-6 md:mx-10 lg:mx-24 mt-0 md:mt-12">
        <AboutMe />

        {loaded && (
          <>
            <Education />
            <Hobbies />
          </>
        )}
      </main>
    </Container>
  );
};

export default About;
