import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiVite,
  SiFramer,
  SiJson,
  SiFigma,
  SiVercel,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAxios
} from "react-icons/si";
import { TbRegex } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi"; 

export const Habilidades = [
  {
    id: "1",
    categoria: "Hard Skills",
    items: [
      { nome: "React", icone: FaReact },
      { nome: "JavaScript", icone: SiJavascript },
      { nome: "TypeScript", icone: SiTypescript },
      { nome: "Axios (API)", icone: SiAxios },
      { nome: "CSS3", icone: FaCss3Alt },
      { nome: "Vite", icone: SiVite },
      { nome: "Git", icone: FaGitAlt },
      { nome: "Framer Motion", icone: SiFramer },
      { nome: "Node.js", icone: FaNodeJs },
      { nome: "Regex", icone: TbRegex },
      { nome: "JSON Server", icone: SiJson },
      { nome: "Photoshop", icone: SiAdobephotoshop },
      { nome: "Figma", icone: SiFigma },
      { nome: "Vercel", icone: SiVercel },
      { nome: "VSCode", icone: BiLogoVisualStudio }, 
      { nome: "Tailwind", icone: SiTailwindcss },
    ],
  },
  {
    id: "2",
    categoria: "Soft Skills",
    descricao: `
Tenho comunicação clara, facilidade de trabalho em equipe e foco em organização, resolução de problemas e pensamento analítico. 
Sou adaptável, proativo e com aprendizado rápido, sempre buscando aprimorar minhas habilidades em React, TypeScript e integração com APIs RESTful.

Valorizo UX/UI, acessibilidade e performance, aplicando boas práticas de versionamento, componentização e metodologias ágeis como Scrum e Kanban. 
Tenho curiosidade constante, gosto de otimizar interfaces e manter código limpo, e trago uma visão multidisciplinar de engenharia, design e colaboração para criar soluções completas e eficientes.
    `,
  },
];

export default Habilidades;
