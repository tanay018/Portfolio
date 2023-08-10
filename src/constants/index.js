import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  react,
  c,
  dsa,
  mern,
  carrent,
  jobit,
  tripguide,
  threejs,
  car,
  recruit,
  spotify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "DSA Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "iNeuron.ai",
    icon: react,
    iconBg: "#383E56",
   // date: "Jan 2022 - Jan 2023",
    points: [
      "Developed web applications using React.js and other related technologies.",
      "I utilize React Router to create smooth navigation experiences within single-page applications.",
      "Implemented responsive design ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Competitive Programming",
    company_name: "C++",
    icon: c,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Pupil on Codeforces with rating 1266.",
      "Codechef Highest Rating 1512 (2 star) & No. of Contests Participated: 34",
      "LeetCode contest rating 1518.",
      "Codeforces highest rank 2247",
    ],
  },
  {
    title: "Data Structures and Algorithms",
    company_name: "C++",
    icon: dsa,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "350+ DSA question solved on Leetcode",
      "500+ DSA/CP question solved on different coding platforms",
      
    ],
  },
 
  {
    title: "Full stack Developer",
    company_name: "MERN",
    icon: mern,
    iconBg: "#E6DEDD",
   // date: "Jan 2023 - Present",
    points: [
      "Currently working on MERN stack project (e-commerce website)",
      "Worked on Spotify Clone project , used NodeJS and ExpressJS (backend development)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Reactjs and Redux",
    name: " ~ Sololearn",
    // designation: "Sololearn",
    // company: "Acme Co",
    image: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png",
  },
  {
    testimonial:
      "Software Engineering Virtual Experience",
    name: " ~ JP Morgan Chase & Co.",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://cdn2.downdetector.com/static/uploads/logo/JP_Morgan_logo.png",
  },
  {
    testimonial:
      "Software Engineering Virtual Experience",
    name: " ~ Goldman Sachs",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://pbs.twimg.com/profile_images/1441140440791617537/JICPNdbf_400x400.png",
  }
];

const projects = [
  {
    name: "FurrEver",
    description:
      "Online pet store, powered by React.js, providing a user-friendly, interactive, and seamless shopping experience for pet owners . Explore our extensive collection of high-quality pet products, including food, treats, toys, grooming supplies, bedding, and accessories",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tanay018/furrever-pets",
  },
  {
    name: "PickColor",
    description:
      "The PickColor Chrome Extension is a powerful and innovative tool designed to empower web developers and graphic designers with seamless color-related tasks. This versatile extension revolutionizes the color selection process, enhancing efficiency and creativity in web development and design projects.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    source_code_link: "https://github.com/tanay018/PickColor-chrome-extension",
  },
  {
    name: "CustomTees",
    description:
      "It is an innovative and interactive platform that blends cutting-edge 3D visualization technology with personalized fashion. This unique project empowers users to design and customize their own 3D T-shirts, adding different colors, patterns, and prints to create personalized, one-of-a-kind garments.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit ,
    source_code_link: "https://github.com/tanay018/CustomTees",
  },
  {
    name: "Spotify Clone",
    description:
      "Developed a dynamic and interactive user interface using MERN stack, ensuring a smooth and engaging user experience . Utilized MongoDB to store and manage user profiles, playlists, and music data, ensuring efficient and scalable data management",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "fullstack",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: spotify ,
    source_code_link: "https://github.com/tanay018/SpotifyClone",
  },
  {
    name: "recruitx",
    description:
      "I designed and developed a user-friendly recruitment website for freshers using ReactJS. This project involved creating an intuitive interface for job seekers to browse and apply for opportunities .",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: recruit,
    source_code_link: "https://github.com/tanay018/recruitx",
  },
  {
    name: "CarGame",
    description:
      "I developed a console-based CarGame which is created using C++ Programming Language and Object-Oriented Programming (OOP) concept . This project involved creating dynamic car movement, collision detection, and user interaction.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OOPs",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: car,
    source_code_link: "https://github.com/tanay018/CarGame",
  },
];

export { services, technologies, experiences, testimonials, projects };
