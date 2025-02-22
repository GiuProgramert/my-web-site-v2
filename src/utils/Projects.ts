import type { Project } from "@interfaces/projects";

import RobotFace from "@img/robot-face.png";
import SpotifyLogo from "@img/spotify-primary-Logo.png";

export const projects: Project[] = [
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
