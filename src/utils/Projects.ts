import type { Project } from "@interfaces/projects";

import RobotFace from "@img/robot-face.png";
import SpotifyLogo from "@img/spotify-primary-Logo.png";
import Clipboard from "@img/clipboard.svg";
import CodridgeLogo from "@img/codridge-logo.webp";

export const projects: Project[] = [
  {
    name: "Codridge",
    description:
      "This project is a landing page made for a client in Fiverr. The goal was to create a landing page for a web development agency. With SEO Optimization and a contact form.",
    tags: ["React.js", "Tailwind CSS", "Next.js", "TypeScript"],
    url: "https://codridge-dev.netlify.app/",
    imgLoading: "lazy",
    imgClassName: "w-20 aspect-auto",
    img: CodridgeLogo,
  },
  {
    name: "URL Shorter",
    description:
      "This project consists of a backend API built with Django REST Framework and a frontend application built with React and TypeScript. The URL Shortener service allows users to create shortened URLs and manage their accounts.",
    tags: [
      "React.js",
      "TypeScript",
      "Django REST Framework",
      "Django",
      "Tailwind CSS",
    ],
    url: "http://67.205.145.151/",
    sourceUrl: "https://github.com/GiuProgramert/url_shorter",
    img: Clipboard,
    imgLoading: "lazy",
    imgClassName: "w-28",
  },
  {
    name: "Spotify Clone",
    description:
      "Spotify clone made with Astro, React.js, and Tailwind. The idea of the project is to learn about the ViewTransitions API and the native web player API. This clone uses Zustand to manage the global state of the currently playing song.",
    tags: ["React.js", "Tailwind CSS", "Astro", "Zustand"],
    url: "https://player-clone.netlify.app/",
    sourceUrl: "https://github.com/GiuProgramert/spotify-clone",
    img: SpotifyLogo,
    imgClassName: "w-28",
    imgLoading: "lazy",
  },
  {
    name: "Booking App",
    description:
      "Booking app maded with React.js using Node.js and Express.js for the backend.",
    tags: ["React.js", "Node.js", "Express.js"],
    url: "https://github.com/GiuProgramert/booking-app",
  },
  {
    name: "Shops Scraper",
    description:
      "Shops scraper made with Python using the BeautifulSoup library.",
    tags: ["Python", "Web scraping"],
    url: "https://github.com/GiuProgramert/shops-scraper",
    img: RobotFace,
  },
];
