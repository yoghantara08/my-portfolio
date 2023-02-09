import Container from "../../components/layout/Container";
import ContactForm from "../../components/form/ContactForm";
import Information from "./Information";
import { motion } from "framer-motion";
import { titleVariants } from "../../animation/about-motion";

const Contact = () => {
  return (
    <Container>
      <main className="flex flex-col text-slate-400 mx-6 md:mx-10 lg-20 xl:mx-32 mt-6 md:mt-32">
        <motion.h1
          className="font-extrabold text-3xl md:text-4xl mb-3 text-aqua font-roboto relative w-fit
          after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
          variants={titleVariants.variants}
        >
          Contact Me
        </motion.h1>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <Information />
          <ContactForm />
        </div>
      </main>
    </Container>
  );
};

export default Contact;
