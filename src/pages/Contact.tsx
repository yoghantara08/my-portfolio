import Container from "../components/layout/Container";

const Contact = () => {
  return (
    <Container>
      <main className="flex flex-col text-slate-400 mx-6 md:mx-10 lg:mx-24 mt-0 md:mt-12">
        <h1
          className="font-extrabold text-3xl md:text-4xl mb-3 text-aqua font-roboto relative w-fit
        after:content-[''] after:block after:top-0 after:left-0 after:h-[1px] after:border after:w-full"
        >
          Contact Me
        </h1>
      </main>
    </Container>
  );
};

export default Contact;
