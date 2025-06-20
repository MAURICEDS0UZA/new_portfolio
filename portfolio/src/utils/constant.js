import jobBoard from "../assets/images/JobBoard.png";
import Swiggy from "../assets/images/SwiggyClone.png";
import Shopping from "../assets/images/shoppingList.png";

const PROJECTS = [
  {
    title: "Swiggy Clone",
    description:
      "Developed a food app. Integrated APIs to fetch real-time data and ensured code quality.",
    technologies: [
      "React.js",
      "Tailwind",
      "Redux",
      "Parcel",
      "JavaScript",
      "React Router",
      "Lazy Loading",
    ],
    link: "https://github.com/MAURICEDS0UZA/Namaste-React",
    image: Swiggy, // Add the image path
  },
  {
    title: "React Job Board",
    description:
      "Integrated React Router and reusable components (cards, hero sections, and job listings).",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "RESTful API",
      "GitHub",
      "JSX",
      "Vite",
    ],
    link: "https://github.com/MAURICEDS0UZA/react_basic",
    image: jobBoard, // Add the image path
  },
  {
    title: "Shopping List",
    description:
      "Implemented interactive features, form validation, dynamic updates, and integrated local storage.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local storage",
      "Git",
      "GitHub",
      "Testing",
      "Debugging",
    ],
    link: "https://shoppingapp27.netlify.app/",
    image: Shopping,
  },
];

const SKILLS = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5/CSS3",
      "Responsive Design",
      "Bootstrap",
      "Babel.js",
      "Redux",
      "Electron.js",
    ],
  },
  {
    category: "Backend",
    skills: ["Express.js", "SQL", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git & GitHub", "Google Cloud Services", "AWS", "Jest", "Webpack"],
  },
];

const SOCIALMEDIA = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/maurice-dsouza/",
    icon: "FaLinkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/MAURICEDS0UZA",
    icon: "FaSquareGithub",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/mauricedsouz",
    icon: "FaSquareXTwitter",
  },
];

const RESUMEURL = "https://flowcv.com/resume/a1ip7tj9ag";
export { PROJECTS, SKILLS, SOCIALMEDIA, RESUMEURL };
