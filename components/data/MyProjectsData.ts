import {
  bahiniba,
  Kelleleapp,
  ctainvestmentsweb,
  esmcgie,
  ggcapp,
  ggcdesktop,
} from '../../public/images';

import { type ProjectType } from '#types';
const MyProjectsList: ProjectType[] = [
  {
    title: 'GGC & Partenaires Web App',
    img: ggcdesktop,
    imgTag: 'GGC & Partenaire',
    descriptions: [
      "Plateforme de gestion des partenariats et collaborations pour les entreprises. Développement en Flutter avec intégration d'API pour la synchronisation des données, gestion des états avec Redux, et utilisation de MongoDB pour le stockage des données.",
    ],
    link: null,
    github: 'Non disponible',
    gif: ggcdesktop,
    stacks: ['flutter', 'api', 'mongodb', 'git'],
  },
  {
    title: 'GGC & Partenaire App',
    img: ggcapp,
    imgTag: 'GGC & Partenaire',
    descriptions: [
      "Application mobile complémentaire à la plateforme web. Permet de suivre les collaborations en temps réel, avec une interface intuitive développée en Flutter. Intégration d'une base de données MongoDB et gestion des requêtes via API.",
    ],
    link: null,
    github: 'Non disponible',
    gif: ggcapp,
    stacks: ['flutter', 'api', 'mongodb', 'git'],
  },
  {
    title: 'ESMC GIE',
    img: esmcgie,
    imgTag: 'ESMC GIE',
    descriptions: [
      "Plateforme dédiée à une startup spécialisée dans le Web3 et les cryptomonnaies. Application web bilingue (français et anglais) réalisée avec Angular et Spring Boot. Intégration de Tailwind CSS pour un design moderne, et récupération en temps réel des taux de cryptomonnaies via une API externe.",
    ],
    link: 'https://esmcgie.com/',
    github: 'Non disponible',
    stacks: [
      'angular',
      'spring',
      'dbeaver',
      'mysql',
      'typescript',
      'tailwindcss',
      'postman',
      'bootstrap',
      'git',
    ],
  },
  {
    title: 'CTA Investments',
    img: ctainvestmentsweb,
    imgTag: 'Site de CTA Investments',
    descriptions: [
      "Site vitrine de CTA Investments, combinant présentation d'entreprise et catalogue de services. Développé avec React et Laravel, intégrant un design responsive grâce à Tailwind CSS. Gestion des données avec MySQL.",
    ],
    link: 'https://cta-investments.com/',
    github: '',
    gif: ctainvestmentsweb,
    stacks: ['react', 'tailwindcss', 'laravel', 'mysql', 'git'],
  },
  {
    title: 'Bahiniba',
    img: bahiniba,
    imgTag: 'Site web Bahiniba',
    descriptions: [
      "Site vitrine pour l'entreprise Bahiniba, mettant en avant leurs services et expertise. Développement en Vue.js et Laravel, avec un design moderne basé sur Tailwind CSS. Intégration de fonctionnalités dynamiques pour la gestion de contenu.",
    ],
    link: 'https://www.inthetech.net/',
    github: 'Non disponible',
    gif: bahiniba,
    stacks: ['vue', 'tailwindcss', 'laravel', 'git'],
  },
  {
    title: 'Kellele site web',
    img: Kelleleapp,
    imgTag: 'Site web Kellele',
    descriptions: [
      "Site officiel de la plateforme Kellele, dédiée à l'événementiel. Développé avec React et Laravel, architecture MVC et méthodologie Merise pour la gestion des données. Stockage sur Neon.tech et utilisation de Tailwind CSS et DaisyUI pour le design.",
    ],
    link: 'https://www.kellele.com',
    github: '',
    gif: Kelleleapp,
    stacks: ['react', 'laravel', 'tailwindcss', 'postman', 'git'],
  },
  {
    title: 'Kellele Mobile App',
    img: Kelleleapp,
    imgTag: 'Kellele application mobile',
    descriptions: [
      "Application mobile dédiée à la gestion et à la participation aux événements via la plateforme Kellele. Développée avec Flutter, intégration de fonctionnalités comme l'achat de tickets et la consultation des événements à venir. Design soigné avec Material UI et support light/dark mode.",
    ],
    link: 'https://play.google.com/store/apps',
    github: '',
    gif: Kelleleapp,
    stacks: ['flutter', 'laravel', 'postman', 'git'],
  },
];


export default MyProjectsList;
