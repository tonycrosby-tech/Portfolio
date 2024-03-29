import project1 from './images/sportzilla-demo.gif';
import project2 from './images/jsquiz.jpg';
import project3 from './images/password-generator.jpg';
import project4 from './images/forums.JPG';
import project5 from './images/website1.JPG';
import github from './images/github.jpg';

export const projects = [
  {
    title: 'Project 1',
    subtitle: 'Sportzilla',
    description: `Created an application where you can search different basketball player names
      and it will populate with information. (Only Basketball)`,
    technologies: ['Technologies Used: HTML, CSS, JavaScript'],
    image: project1,
    link: 'https://millsy4.github.io/sportz_project/',
  },
  {
    title: 'Project 2',
    subtitle: 'Javascript Quiz',
    description: `This was a Quiz I made, It's a Quiz with a few questions about javascript. You can have a high score and theres also a time limit`,
    image: project2,
    technologies: ['Technologies Used: HTML, CSS, JavaScript'],
    link: 'https://github.com/tonycrosby-tech/04_web_api/',
  },
  {
    title: 'Project 3',
    subtitle: 'Password Generator',
    description: `This project is a password generator! Enter a number between 8 and 128 and it will randomly generate a password.`,
    image: project3,
    technologies: ['Technologies Used: HTML, CSS, JavaScript'],
    link: 'https://github.com/tonycrosby-tech/03_password_generator/',
  },
  {
    title: 'Project 4',
    subtitle: 'WhatChaMaCallIt',
    description: `This is a Forum where a user can create threads and reply to others posts.`,
    technologies: ['Technologies Used: JavaScript, Bootstrap'],
    image: project4,
    link: 'https://fullstackbc-project-02.herokuapp.com/',
  },
  {
    title: 'Project 5',
    subtitle: '3rd Portfolio',
    description: `This was my last website created before making a React Website!`,
    technologies: ['Technologies Used: HTML, JavaScript, Bootstrap'],

    image: project5,
    link: 'https://github.com/tonycrosby-tech/Portfolio_Complete',
  },
  {
    title: 'Github',
    subtitle: 'More projects ',
    description: `If you would like to check out more projects that I have created please check out my GitHub.`,
    technologies: ['Python, C++, JavaScript, React, etc.'],

    image: github,
    link: 'https://github.com/tonycrosby-tech',
  },
];

export const skills = ['HTML','CSS','JavaScript','React','Node','Express','MongoDB','MySQL','Bootstrap','Git','GitHub','Heroku', 'C++', 'C#', 'AWS', 'Python'];
