import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import { RiHome3Line } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineWorkOutline, MdOutlineMail } from 'react-icons/md';

export const information = {
  photo:
    'https://img.freepik.com/vector-gratis/personaje-vendedor-diseno-plano-sujetando-contrato_23-2147885529.jpg?w=740&t=st=1702076659~exp=1702077259~hmac=c35f4a7ef4e4a7bbf754fe19cec75ed26996a28b45747a5edec794c33b173fb7',

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
