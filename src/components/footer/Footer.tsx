import SocialFooter from "../social/SocialFooter";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-12 md:mt-20 justify-center items-center w-screen  font-roboto transition duration-300">
      <SocialFooter />
      <a
        href="https://github.com/yoghantara08/my-portfolio"
        target="_blank"
        rel="noreferrer"
        className="text-gray text-sm pb-4 md:pb-5 cursor-pointer group hover:text-aqua"
      >
        Developed by{" "}
        <span className="text-gray group-hover:text-aqua">
          Gustut Yoghantara
        </span>{" "}
        | 2023
      </a>
    </footer>
  );
};

export default Footer;
