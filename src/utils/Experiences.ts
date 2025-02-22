import type { Experience } from "@interfaces/experience";

export const experiences: Experience[] = [
  {
    urlImg:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGglHxEK4IXyg/company-logo_100_100/company-logo_100_100/0/1670327813788?e=1745452800&v=beta&t=CYqOQeJIGGywBlK_F0kZDYafwr_cPB9nOVqkcII1NYg",
    title: "Frontend Developer",
    description: "Homebanking Redesign - Solar Bank Paraguay",
    company: "Itae Paraguay",
    fromDate: new Date("2024-04-01"),
    toDate: null,
    imgLoading: "eager"
  },
  {
    urlImg:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGzgHC_OQ1iBA/company-logo_100_100/company-logo_100_100/0/1654955661323?e=1745452800&v=beta&t=npsq2BbKcWpIazx93CSdpjv4uIOnlgBgx4MOdNRcppY",
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
    urlImg:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFjp4wQNkmMSw/company-logo_100_100/company-logo_100_100/0/1683046501615?e=1745452800&v=beta&t=pHr4YGFe3dSjUsBt2lQiVgrO1pqIEC4vHn4RNsJYaiE",
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
