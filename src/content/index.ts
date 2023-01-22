import {
  abccars,
  abcjobs,
  abclearning,
  code,
  knowyourneighborhood,
  mobilelegend,
  react,
  rindik,
  springboot,
  taracafe,
  webstikom,
} from "../assets";

// Types
export interface INav {
  path: string;
  item: "Home" | "About" | "Skills" | "Projects" | "Contact";
}

export interface ISocials {
  name: "GitHub" | "LinkedIn" | "Instagram" | "Discord" | "Twitter";
  link: string;
}

export interface IHobbies {
  hobby: string;
  icon: "game" | "code" | "music";
  pic: string;
  picText: string;
  description: string;
  description2?: string;
}

export interface IProject {
  image: string;
  tags: string[];
  description: string;
  title: string;
  demo?: string;
  github: string;
}

// Contents
export const navLink: INav[] = [
  { path: "/", item: "Home" },
  { path: "/about", item: "About" },
  { path: "/skills", item: "Skills" },
  { path: "/projects", item: "Projects" },
  { path: "/contact", item: "Contact" },
];

export const socials: ISocials[] = [
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

export const links = {
  portfolio: "https://github.com/yoghantara08/my-portfolio",
  omega: "https://www.instagram.com/omegasquadbali/",
};

export const aboutMe = {
  paragraph1:
    "Hi Everyone! My name is Ida Bagus Ketut Yoghantara usually called Gustut or Yoghantara. I enjoy creating things that live on the internet. My passion for Web Development started back in September 2021.",
  paragraph2:
    "I am driven and ambitious. I thrive on challenges and establish goals for myself regularly, so I always have something to strive ahead. I enjoy meeting new people and finding out about their experiences and backgrounds.",
};

export const HobbiesArr: IHobbies[] = [
  {
    hobby: "Video Games",
    icon: "game",
    pic: mobilelegend,
    picText:
      "1st Place Mobile Legends Tournament, Edufair Esport Championship 2019",
    description:
      "I've been playing video games since I was in kindergarten. I still enjoy this hobby even now. I have played a lot of genres, including MMORPG, ARPG, MOBA, Strategy, FPS, etc. But what I like the most are MOBA and MMORPG. In high school, I had an ESPORT Mobile Legends team named Omega Squad with seven members. We often take part in Mobile Legends competitions and win several of them.",
  },
  {
    hobby: "Programming",
    icon: "code",
    pic: code,
    picText: "Visual Studio Code",
    description:
      "I love Programming, especially in the field of Web Development. I began learning web development in September 2021. It started when I was in a very bad state and wanted to improve myself. On September 6, 2021, I found a video named Jalur Belajar Web Development (Front End vs. Back End) from WEB Programming UNPAS Youtube channel.",
    description2:
      "With my determination to improve and this video that I accidentally found, I started my journey in learning Web development. Until now, I have studied several Web technologies, including HTML, CSS, JavaScript, TypeScript, React, Tailwindcss, Bootstrap, Java, Spring Boot, and MySQL.",
  },
  {
    hobby: "Balinese Instrument",
    icon: "music",
    pic: rindik,
    picText:
      "Playing Rindik (Traditional Balinese percussion instrument made from bamboo)",
    description:
      "I was born into a family that loves Balinese Traditional Arts. Both of my parents graduated from the University of the Arts and because of that since childhood I have been familiar with various kinds of traditional Balinese arts, including Balinese Dance and Balinese Gamelan. This hobby of playing Rindik originated from my grandfather who gave me an antique Balinese Rindik. Since then I have enjoyed playing Rindik, a gift from my grandfather.",
  },
];

export const education = [
  {
    school: "Lithan EduClass Academy",
    timeline: "2022 - Present",
    place: "Singapore",
    description: "Applied Degree in Software Engineering",
  },
  {
    school: "Institut Teknologi dan Bisnis STIKOM Bali",
    timeline: "2020 - Present",
    place: "Bali, Indonesia",
    description: "Bachelor of Science in Information Systems",
  },
  {
    school: "SMAN 1 Kuta Utara",
    timeline: "2017 - 2020",
    place: "Bali, Indonesia",
    description: "Highschool Diploma, Natural sciences",
  },
];

export const certificate = [
  {
    name: "React - The Complete Guide incl Hooks, React Router, Redux",
    from: "Udemy",
    timeline: "Jan 2023",
    pic: react,
    alt: "React",
    credential:
      "https://www.udemy.com/certificate/UC-2a54fef6-5cb4-4fb4-b77a-5c28946f961c/",
  },
  {
    name: "Spring & Hibernate for Beginners includes Spring Boot",
    from: "Udemy",
    timeline: "Nov 2022",
    pic: springboot,
    alt: "Spring Boot",
    credential:
      "https://www.udemy.com/certificate/UC-3c395163-3747-4d9c-b513-f6faabc8648e/",
  },
];

export const skills = [
  { logo: "HTML" },
  { logo: "CSS" },
  { logo: "JavaScript" },
  { logo: "TypeScript" },
  { logo: "React" },
  { logo: "Tailwindcss" },
  { logo: "Bootstrap" },
  { logo: "Java" },
  { logo: "Spring" },
  { logo: "MySQL" },
  { logo: "Git" },
  { logo: "Firebase" },
];

export const projects: IProject[] = [
  {
    title: "ABC Cars Portal",
    description:
      "A website application that offers a marketplace for buying and selling used cars.",
    image: abccars,
    github: "https://github.com/yoghantara08/ABC-Cars-Portal",
    tags: ["Bootstrap", "Spring Boot", "MySQL"],
  },
  {
    title: "ABC Jobs Portal",
    description:
      "A website application that allows user find a job and apply for job oppurtunities.",
    image: abcjobs,
    github: "https://github.com/yoghantara08/ABC-Jobs-Portal",
    tags: ["Bootstrap", "Spring MVC", "MySQL"],
  },
  {
    title: "Know Your Neighborhood",
    description:
      "A website application that provides users with information about their local neighborhood.",
    image: knowyourneighborhood,
    github: "https://github.com/yoghantara08/Know-Your-Neighborhood",
    tags: ["React", "Tailwindcss", "Axios", "Spring Boot", "OAuth2", "MySQL"],
  },
  {
    title: "Web STIKOM Bali",
    description: "Redesign of ITB STIKOM Bali University official website.",
    image: webstikom,
    github: "https://github.com/yoghantara08/UAS-Web-Stikom-Bali",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "AOS"],
    demo: "https://yoghantara08.github.io/UAS-Web-Stikom-Bali/",
  },
  {
    title: "TaraCafe",
    description:
      "TaraCafe is a Coffee Shop Website that serve the best coffee.",
    image: taracafe,
    github: "https://github.com/yoghantara08/TaraCafe",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    demo: "https://yoghantara08.github.io/TaraCafe/",
  },
  {
    title: "ABC Learning Center",
    description:
      "A project-based website dedicated for IT Training institute that conducts courses like Front-end and Back-end Web development.",
    image: abclearning,
    github: "https://github.com/yoghantara08/ABC-Learning-Center",
    tags: ["React", "CSS", "Vite"],
    demo: "https://abc-learning-center.vercel.app/",
  },
];
