import type { Experience } from "@interfaces/experience";
import ItaeLogo from "@img/itae.jpeg";
import ParacanLogo from "@img/paracan.jpeg";
import CodysLogo from "@img/codys.jpeg";

export const experiences: Experience[] = [
  {
    urlImg: ItaeLogo,
    title: "Frontend Developer",
    description: "Homebanking Redesign - Solar Bank Paraguay",
    company: "Itae Paraguay",
    fromDate: new Date("2024-04-01"),
    toDate: null,
    imgLoading: "eager",
  },
  {
    urlImg: ParacanLogo,
    title: "Full Stack Developer",
    description: [
      "Frontend Development with React",
      "Backend Development with Django and Django REST Framework",
      "PostgreSQL Data Base Management",
      "Odoo ERP Implementation, Support and Module Development",
      "Data Analytics with Pandas",
    ],
    company: "Paracan Limited",
    fromDate: new Date("2022-09-01"),
    toDate: new Date("2024-04-05"),
  },
  {
    urlImg: CodysLogo,
    title: "Full Stack Developer",
    description: [
      "Laravel Development",
      "Databases Management",
      "Frontend Development (Html / CSS / Javascript)",
      "Python Script Development",
      "Worked under the Scrum methodology",
    ],
    company: "Codys S.A.",
    fromDate: new Date("2021-12-01"),
    toDate: new Date("2022-06-01"),
  },
];
