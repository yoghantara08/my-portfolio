export interface Nav {
  path: string;
  item: "Home" | "About" | "Skills" | "Project" | "Contact";
}

export interface Socials {
  name: "GitHub" | "LinkedIn" | "Instagram" | "Discord" | "Twitter";
  link: string;
}

export const navLink: Nav[] = [
  { path: "/", item: "Home" },
  { path: "/about", item: "About" },
  { path: "/skills", item: "Skills" },
  { path: "/project", item: "Project" },
  { path: "/contact", item: "Contact" },
];

export const socials: Socials[] = [
  { name: "GitHub", link: "https://github.com/yoghantara08" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yoghantara/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gustutyoghantara/",
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/853617679588261899",
  },
  { name: "Twitter", link: "https://twitter.com/kusho08" },
];

export const myPortfolioLink = "https://github.com/yoghantara08/my-portfolio";
