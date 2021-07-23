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

export default {
  name: "Bakhodir Kadyrov",
  age: "34 года",
  from: "Кыргызстан",
  spec: "Веб-разработчик",
  descriptions: [
    "Занимаюсь коммерческой веб-разработкой с августа 2018 года.",
    "Учился на онлайн курсах: freeCodeCamp, codeСademy.",
    "В данный момент занимаюсь веб-разработкой на React"
  ],
  portfolios: [
    {
      id: "1",
      projectName: "Ivaleshi",
      description: "Добавление комопонентов",
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
      date: "Июль 2019",
      details:
        "Проект был в процессе разработки. Я непосредственно занимался: созданием модального окна видео, верстка мобильного меню, социальние иконки, добавление анимации. И по мелочам там подправить текст, изменит шрифт и т.д. "
    },
    {
      id: "2",
      projectName: "Donishki",
      description: "Доработка проекта",
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
      date: "Апрель 2019",
      details:
        "Проект дорабатывался. Было очень интересно. Сделал страницу с оптовой продажи. Ввиде таблицы с интеграцией всех состояний. А также добавление фильтров для товаров. Модальные окна."
    },
    {
      id: "3",
      projectName: "Стекло 24",
      description: "Верстка",
      img: stekloImg,
      modalImg: stekloModal,
      stacks: ["HTML", "CSS", "Jquery"],
      githubLink: null,
      projectLink: "https://xn--24-mlcufsri.xn--80adxhks/",
      date: "Сентябрь 2019",
      details:
        "До меня проект был реализован. Однако заказчика не устраивало скорость загрузки (GooglePageSpeed). Полностью сверстал с нуля. Основным условием было не использовать любые элементы с предыдушей верстки и сделать на чистом HTML. После верстки немного доработал, чтобы улучшить скорость загрузки."
    },
    {
      id: "4",
      projectName: "Проф плюс",
      description: "Разработка интерактива",
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
      date: "Апрель 2019",
      details:
        "Была поставлена задача, разработать интерактивную часть выбора кредитной карты. А также интеграция с существующим API. В общей сложности было сделаны 8 страниц: выбор карты, слайдер, обратная связь, загрузка файлов (drag&drop), калькулятор стоимости карт и т.д. "
    },
    {
      id: "5",
      projectName: "Lucky Promo",
      description: "Разработка",
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
      projectLink: null,
      date: "Июнь 2019",
      details:
        "Был предоставлен макет в Figma(очень удобен для разработчиков). И по нему верстались все компоненты. Очень много было картинок, которых нужно было спозиционировать. К сожалению, дальнейшая судьба проекта осталась для меня тайной. "
    },
    {
      id: "6",
      projectName: "Mosgosprint",
      description: "Разработка",
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
      date: "Июль 2019",
      details:
        "Один из самых интересных проектов. Где нужно было рендерит огромные данные с сервера. Особенно раздел калькуляция, где все считается с учетом выбора пользователя. И картинки должны были менять цвет при наведении и клике(благо svg есть). Сложности возникли при вставке VK виджета (насчет его адаптивности)."
    },
    {
      id: "7",
      projectName: "Upyourbody",
      description: "Разработка",
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
      date: "Май 2019",
      details:
        "Новинькой был этот quiz тест. Решение было простое, применить обычный слайдер с контролем состояния. Сложности были с этими не прямоуголными картинками(transform пришел на помощь). После этого проекта, появилось желание заняться спортом. Но это другая тема..."
    },
    {
      id: "8",
      projectName: "Nagravirovku",
      description: "Добавить видео модалку",
      img: nagravirovkuImg,
      modalImg: nagravirovkuModal,
      stacks: ["react", "styled-components"],
      githubLink:
        "https://github.com/casplase1/nagravirovku/commits?author=bahoss",
      projectLink: "https://nagravirovku.ru/",
      date: "Апрель 2019",
      details:
        "Задачка была простая добавить слайдер с видео. И по мелочам там изменить блок, тут подправить текст."
    }
  ]
};
