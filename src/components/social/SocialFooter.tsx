import { socials } from "../../content";
import Social from "./Social";

const SocialFooter = () => {
  return (
    <ul className="md:hidden flex space-x-5 mb-3">
      {socials.map((social) => (
        <Social key={social.name} name={social.name} link={social.link} />
      ))}
    </ul>
  );
};

export default SocialFooter;
