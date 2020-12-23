import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Lestrix' Portfolio", // e.g: 'Name | Developer'
  lang: 'de', // e.g: en, es, fr, jp
  description: 'Willkommen auf meinem Portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Name: John Lester Kortmann',
  paragraphTwo: 'Ausbildung: Bachelor of Science (B.Sc.) im Fach Physik an der Technischen Universität Dortmund',
  paragraphThree: 'Dev Skills: Python(Machine Learning, numPy, Scikit, TensorFlow), Javascript(React, Gatsby, ...), Swift(ios Apps), Elixir, Java, C#, C++, HTML, CSS.',
  paragraphFour: 'Sonstiges: Ich mag Musik, Kitesurfen, Gaming and Streaming(Twitch.tv), Basketball und ich bin 1 Jahr lang um die Welt gen Osten gereist ...',
  paragraphFive: 'Wohnort: Dortmund || Alter: 30',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Möbel Website',
    info: 'Eine stilvolle Möbel-Designer Website mit Webshop',
    info2: 'Das tatsächliche Projekt ist aus privaten Gründen anonymisiert',
    url: '',
    repo: 'https://gattinator-shop.netlify.app/', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interesse geweckt? Dann lass uns doch quatschen :]',
  btn: 'Jetzt kontaktieren',
  email: 'john.lester.kortmann@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/asdfguy90',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/john-lester-kortmann-58b57811a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lestrix',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
