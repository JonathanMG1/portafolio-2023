import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import { RiHome3Line } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineWorkOutline, MdOutlineMail } from 'react-icons/md';
import perfil from '@/public/foto-perfil.jpeg';
export const information = {
  photo: { perfil },

  socialMedia: [
    {
      socialMedia: 'Linkedin',
      icon: RiLinkedinBoxFill,
      href: 'https://www.linkedin.com/in/jonathan-maldonado-981336234/',
    },
    {
      socialMedia: 'Github',
      icon: RiGithubFill,
      href: 'https://github.com/JonathanMG1',
    },
  ],
};

export const routes = [
  {
    label: 'Home',
    icon: RiHome3Line,
    href: '/',
  },
  {
    label: 'Proyectos',
    icon: FaProjectDiagram,
    href: '/work',
  },
  {
    label: 'Experiencia',
    icon: MdOutlineWorkOutline,
    href: '/experience',
  },
  {
    label: 'Contacto',
    icon: MdOutlineMail,
    href: '/contact',
  },
];
