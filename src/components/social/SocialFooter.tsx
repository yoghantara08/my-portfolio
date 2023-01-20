import Discord from "./Discord";
import GitHub from "./GitHub";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

interface Socials {
  name: string;
  logo: JSX.Element;
  link: string;
}

const socials: Socials[] = [
  {
    name: "Instagram",
    logo: <Instagram />,
    link: "https://www.instagram.com/gustutyoghantara/",
  },
  {
    name: "LinkedIn",
    logo: <LinkedIn />,
    link: "https://www.linkedin.com/in/yoghantara/",
  },
  { name: "GitHub", logo: <GitHub />, link: "https://github.com/yoghantara08" },
  {
    name: "Discord",
    logo: <Discord />,
    link: "https://discordapp.com/users/853617679588261899",
  },
  { name: "Twitter", logo: <Twitter />, link: "https://twitter.com/kusho08" },
];

const SocialFooter = () => {
  return (
    <ul className="md:hidden flex space-x-5 mb-3">
      {socials.map((social) => (
        <li key={social.name} className="hover:-translate-y-[1px]">
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            {social.logo}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialFooter;
