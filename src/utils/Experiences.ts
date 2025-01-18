import type { Experience } from "@interfaces/experience";

export const experiences: Experience[] = [
  {
    urlImg:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGglHxEK4IXyg/company-logo_100_100/company-logo_100_100/0/1670327813788?e=1745452800&v=beta&t=CYqOQeJIGGywBlK_F0kZDYafwr_cPB9nOVqkcII1NYg",
    title: "Desarrollador de front-end",
    description: "Rediseño del Homebanking del Banco Solar",
    company: "Itae Paraguay",
    fromDate: new Date("2024-04-01"),
    toDate: null,
  },
  {
    urlImg:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGzgHC_OQ1iBA/company-logo_100_100/company-logo_100_100/0/1654955661323?e=1745452800&v=beta&t=npsq2BbKcWpIazx93CSdpjv4uIOnlgBgx4MOdNRcppY",
    title: "Desarrollador full stack",
    description: [
      "Desarrollo Frontend React.js",
      "Desarrollo Backend Django, Django REST Framework",
      "Manejo de Base de datos PostgreSQL",
      "Implementación, Soporte y Desarrollo de Modulos Odoo ERP",
      "Análisis de Datos con Pandas",
    ],
    company: "Paracan Limited",
    fromDate: new Date("2022-09-01"),
    toDate: new Date("2024-04-05"),
  },
  {
    urlImg:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFjp4wQNkmMSw/company-logo_100_100/company-logo_100_100/0/1683046501615?e=1745452800&v=beta&t=pHr4YGFe3dSjUsBt2lQiVgrO1pqIEC4vHn4RNsJYaiE",
    title: "Programador full stack",
    description: [
      "Desarrollo en Laravel",
      "Manejo de base de datos",
      "Desarrollo Frontend (Html / CSS / Javascript)",
      "Desarrollo de Scripts en Python",
      "Trabajo bajo la metodología Scrum",
    ],
    company: "Codys S.A.",
    fromDate: new Date("2021-12-01"),
    toDate: new Date("2022-06-01"),
  },
];
