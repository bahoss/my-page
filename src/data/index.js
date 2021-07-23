import ivaleshiImg from "../img/ivaleshi.png";
import ivaleshiModal from "../img/ivaleshiModal.png";
import donishkiImg from "../img/donishki.png";
import donishkiModal from "../img/donishkiModal.png";
import stekloImg from "../img/steklo.png";
import stekloModal from "../img/stekloModal.png";
import profplusImg from "../img/profplus.png";
import profplusModal from "../img/profplusModal.png";
import luckypromoImg from "../img/luckypromo.png";
import luckypromoModal from "../img/luckypromoModal.png";
import mosgosprintImg from "../img/mosgosprint.png";
import mosgosprintModal from "../img/mosgosprintModal.png";
import upyourbodyImg from "../img/upyourbody.png";
import upyourbodyModal from "../img/upyourbodyModal.png";
import nagravirovkuImg from "../img/nagravirovku.png";
import nagravirovkuModal from "../img/nagravirovkuModal.png";
import kitsystems from "../img/kitsystems.png";
import kitsystemsModal from "../img/kitsystemsModal.png";


export default {
  name: "Bakhodir Kadyrov",
  age: "36 years old",
  from: "Kyrgyzstan",
  spec: "Web-developer",
  greeting: 'Hi, my name is Bakhodir. I am from Kyrgyzstan, 36 years old. I have been developing since 2018.',
  about: 'There were many different projects offline, from a small page to a large logistics platform. In addition, there was a cryptocurrency exchanger.',
  principles: 'My work principles: a professional approach to problem-solving, analysis and use of modern technologies, writing clean and optimizing code, training, and discussion before starting. ',
  skills: "My skills: HTML, CSS, Javascript, React, TypeScript.",
  
  portfolios: [
    {
      id: "1",
      projectName: "Ivaleshi",
      description: "Add new feature",
      img: ivaleshiImg,
      modalImg: ivaleshiModal,
      stacks: [
        "react",
        "unstated",
        "styled-components",
        "react-flexbox-grid",
        "react-input-mask",
        "react-scroll"
      ],
      githubLink: "https://github.com/1gory/ivaleshi/commits?author=bahoss",
      projectLink: "https://ivaleshi.ru/",
      date: "July 2019",
      details:
        "The project was under development. I was directly involved in: creating a modal video window, layout of a mobile menu, social icons, adding animation. And on the little things there, correct the text, change the font, etc."
    },
    {
      id: "2",
      projectName: "Donishki",
      description: "Refactoring project",
      img: donishkiImg,
      modalImg: donishkiModal,
      stacks: [
        "react",
        "react-router",
        "styled-components",
        "react-flexbox-grid"
      ],
      githubLink: null,
      projectLink: "https://donishki.ru/",
      date: "April 2019",
      details:
        "The project was being finalized. It was very interesting. Made a wholesale page. As a table with the integration of all states. And also adding filters for products. Modal windows."
    },
    {
      id: "3",
      projectName: "Стекло 24",
      description: "Developing",
      img: stekloImg,
      modalImg: stekloModal,
      stacks: ["HTML", "CSS", "Jquery"],
      githubLink: null,
      projectLink: "https://xn--24-mlcufsri.xn--80adxhks/",
      date: "September 2019",
      details:
        "Before me, the project was implemented. However, the customer was not satisfied with the download speed (GooglePageSpeed). Completely laid out from scratch. The main condition was not to use any elements from the previous layout and to do it in pure HTML. After the layout, I slightly modified it to improve the loading speed."
    },
    {
      id: "4",
      projectName: "Проф плюс",
      description: "Add new dynamic component",
      img: profplusImg,
      modalImg: profplusModal,
      stacks: [
        "react",
        "styled-components",
        "react-input-mask",
        "react-bootstrap"
      ],
      githubLink: null,
      projectLink: "https://plus51.ru/card-react/#",
      date: "April 2019",
      details:
        "The task was to develop an interactive part of choosing a credit card. As well as integration with the existing API. A total of 8 pages were made: card selection, slider, feedback, file upload (drag & drop), card cost calculator, etc."
    },
    {
      id: "5",
      projectName: "Lucky Promo",
      description: "Developing",
      img: luckypromoImg,
      modalImg: luckypromoModal,
      stacks: [
        "react",
        "styled-components",
        "react-input-mask",
        "react-bootstrap",
        "react-router-dom"
      ],
      githubLink: null,
      projectLink: 'https://www.lucky-promo.ru/',
      date: "June 2019",
      details:
        "The layout was provided in Figma (very handy for developers). And all the components were typeset on it. There were a lot of pictures that needed to be positioned."
    },
    {
      id: "6",
      projectName: "Mosgosprint",
      description: "Developing",
      img: mosgosprintImg,
      modalImg: mosgosprintModal,
      stacks: [
        "react",
        "styled-components",
        "react-input-mask",
        "react-bootstrap",
        "react-router-dom",
        "react-scroll"
      ],
      githubLink: null,
      projectLink: "https://mosgosprint.ru/",
      date: "July 2019",
      details:
        "One of the most interesting projects. Where needed to render huge data from the server. Especially the costing section, where everything is calculated taking into account the user's choice. And the pictures had to change color on hover and click (since there is svg). Difficulties arose when inserting a VK widget (about its adaptability)."
    },
    {
      id: "7",
      projectName: "Upyourbody",
      description: "Developing",
      img: upyourbodyImg,
      modalImg: upyourbodyModal,
      stacks: [
        "react",
        "styled-components",
        "react-input-mask",
        "react-bootstrap",
        "react-router-dom",
        "react-scroll"
      ],
      githubLink: null,
      projectLink: "https://upyourbody.ru/",
      date: "May 2019",
      details:
        "New was this quiz test. The solution was simple, use a regular stateful slider. The difficulties were with these non-rectangular pictures (transform came to the rescue). After this project, there was a desire to go in for sports. But that's a different topic ..."
    },
    {
      id: "8",
      projectName: "Nagravirovku",
      description: "Add video modal",
      img: nagravirovkuImg,
      modalImg: nagravirovkuModal,
      stacks: ["react", "styled-components"],
      githubLink:
        "https://github.com/casplase1/nagravirovku/commits?author=bahoss",
      projectLink: "https://nagravirovku.ru/",
      date: "April 2019",
      details:
        "The task was simple to add a video slider. And on the little things there to change the block, here to correct the text."
    },
    {
      id: "9",
      projectName: "Kit systems",
      description: "Developing",
      img: kitsystems,
      modalImg: kitsystemsModal,
      stacks: ["react", "styled-components", 'redux', 'material ui'],
      githubLink: null,
      projectLink: null,
      date: "2020- 2021",
      details:
        "I got a job in this company on a permanent basis. In the process of work, we have developed a crm service for a large furniture company, an application for a medical clinic, a website for a cleaning company."
    }
  ]
};
