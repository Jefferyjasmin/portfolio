import React from "react";
import project1 from "./project/devconnect.png";
import chatbox from "./project/chatapp.png";
import AirBnb from "./project/AirBnb.png";
import goalapp1 from "./project/goalapp1.png";
const Projects = [
  {
    id: 1,
    title: "Airbnb",
    techStack: [
      "JavaScript",
      "Reactjs",
      "HTML ",
      "CSS",
      "ES6",
      "MOBILE RESPONSIVE",
      "FIREBASE(NOSQL DATABASE)",
    ],
    description: "I enjoyed re-creating the famous Airbnb",
    projectLink: "https://clone-9a863.web.app/",
    github: "https://github.com/Jefferyjasmin/airbnbclone",
    images: [AirBnb],
  },
  {
    id: 2,
    title: "Developer Connect",
    techStack: [
      "JavaScript",
      "Reactjs",
      "HTML ",
      "CSS",
      "EXPRESS",
      "NODE JS",
      "ES6",
      "BOOTSTRAP",
      "MOBILE RESPONSIVE",
      "MONGO DB(NOSQL DATABASE)",
    ],
    description:
      " In this project user can create profiles , login and out ,create comments like another users comments and more. ",
    projectLink: "https://murmuring-thicket-98899.herokuapp.com/",
    github: "https://github.com/Jefferyjasmin/mentorship",
    images: [project1],
  },
  {
    id: 3,
    title: "Goals App",
    techStack: [
      "JavaScript",
      "Reactjs",
      "HTML ",
      "CSS",
      "EXPRESS",
      "NODE JS",
      "ES6",
      "BOOTSTRAP",
      "MOBILE RESPONSIVE",
      "MONGO DB(NOSQL DATABASE)",
    ],
    description:
      " In this project user can create profiles , login and out,I used protected routes and list goals that only the user can see",
    github: "https://github.com/Jefferyjasmin/mentorship",
    images: [goalapp1],
  },
];
export default Projects;
