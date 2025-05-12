import { Cloud } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  web,
  mongodb,
  git,
  figma,
  docker,
  tensorflow,
  numpy,
  raspberrypi,
  flask,
  c,
  python,
  linkedin,
  leetcode,
  github,
  linkedinpic,
  githubpic,
  leetcodepic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Robotics Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Raspberry Pi",
    icon: raspberrypi,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    title: "Emergency Response System for Real-Time Surveillance",
    project_name: "Autonomous Drone",
    icon: raspberrypi,
    iconBg: "#383E56",
    date: "Jan 202 - present",
    points: [
      " Technologies: Python, OpenCV, TensorFlow, Raspberry Pi, Computer Vision.",
      "Working on developing an autonomous UAV system to respond to emergency situations and reach the location while contacting the nearest police stations.",
      "The focus areas will include deep learning model training, UAV control systems, and optimizing real-time performance.",
      "The instructor is expected to acquire proficiency in UAV programming, image segmentation, and pattern recognition in complex visual scenarios.",
    ],
  },
  {
    title: "Emergency Response System",
    project_name: "Netwrking System",
    icon: flask,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Technologies: Python, OpenCV, TensorFlow, Raspberry Pi, Computer Vision.",
      "Developed a robust networking system integrated with a privately hosted website to stream live camera feed to the nearest police station for rapid response during SOS calls",
      "The backend system was built using Python, ensuring efficient data handling and communication between the UAV and the server.",
    ],
  },
  {
    title: "Human Fall Detection System",
    project_name: "Model Training",
    icon: tensorflow,
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
      "Technologies used: Python, TensorFlow, Scikit-learn, OpenCV",
      "Created a health monitoring system using computer vision and machine learning techniques to dDetect critical falls in real time and trigger an immediate alert for rapid response.",
      "Focused on real-time video capture and processing, implementing motion detection and real-time monitoring.",
    ],
  },
  {
    title: "Movie Recommendation System",
    project_name: "Machine Learning & Data Preprocessing",
    icon: numpy,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Technologies Used: Python, Pandas, NumPy, Scikit-learn, Natural Language Processing (NLP).",
      "Developed a personalized movie recommendation system leveraging collaborative and content-based filtering.",
      "Utilized Pandas and NumPy extensively for efficient data cleaning, transformation, and manipulation to prepare input for model training.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "If you're looking for someone who blends deep AIML expertise with hands-on home lab experimentation, my friend is the go-to innovator pushing boundaries where code meets hardware.",
    name: "Clyde Lobo",
    designation: "Automation Engineer",
  },
  {
    testimonial:
      "Rashaad is a passionate and driven individual with a natural flair for innovation. His dedication to learning and problem-solving is truly inspiring. A reliable team player and a future tech leader in the making!",
    name: "Nithin M",
    designation: "Cloud Support Enginner",
  },
  {
    testimonial:
      "Rashaad is a dedicated and disciplined student with a strong aptitude for mathematical analysis and logical reasoning. His ability to grasp complex concepts and apply them effectively sets him apart as a promising learner.",
    name: "Avinash Daniel D Souza",
    designation: "Lecturer",
  }
];

const profile = [
  {
    name: "linkedin",
    icon: linkedin,
    description:
      "Connect with me on LinkedIn to explore my professional journey, projects, certifications, and technical experience.",
    image: linkedinpic,
    source_code_link: "https://www.linkedin.com/in/rashaadn/",
  },
  {
    name: "leetcode",
    icon: leetcode,
    description:
      "Sharpening my problem-solving skills with data structures, algorithms, and daily coding challenges.",
    image: leetcodepic,
    source_code_link: "https://leetcode.com/u/bugster001/",
  },
  {
    name: "github",
    icon: github,
    description:
      "Explore my codebase—from robotics and UAV systems to machine learning projects and web development.",
    image: githubpic,
    source_code_link: "https://github.com/rash-aad",
  },
];

export { services, technologies, experiences, testimonials, profile };
