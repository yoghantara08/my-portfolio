const SocialRight = () => {
  return (
    <nav className="hidden md:block absolute left-auto right-[40px] bottom-0 z-20 w-[40px]">
      <ul
        className="flex flex-col justify-center items-center
        after:h-[90px] after:w-[1px] after:bg-gray after:content-[''] after:block after:mx-auto after:mt-6"
      >
        <a
          href="mailto:gyoghantara@gmail.com"
          className="rotate-90 mb-24 inline-block font-roboto text-[13.5px] text-gray 
          tracking-widest hover:text-aqua hover:-translate-y-1 duration-200"
        >
          gyoghantara@gmail.com
        </a>
      </ul>
    </nav>
  );
};

export default SocialRight;
