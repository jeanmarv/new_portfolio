import React from 'react';
import '../css/Main.css';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { useHistory } from 'react-router';
import menuaberto from '../images/menu-aberto.png';
import about from '../images/about.jpg';
import java from '../images/java.png';
import python from '../images/python.png';
import typescript from '../images/typescript.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import html from '../images/html.png';
import css from '../images/css.png';
import mongodb from '../images/mongoDB.png';
import mysql from '../images/mysql.png';
import projeto1 from '../images/project_recipe_app.png';
import projeto2 from '../images/projeto-2.png';
import projeto3 from '../images/projeto-3.png';
import usaIcon from '../images/usaIcon.png';
import ptIcon from '../images/brasilIcon.png';

export default function MainEnglish() {
  const history = useHistory();

  function abrirmenu() {
    const BarraMenuAberto = document.getElementById('barra-menu');

    if (BarraMenuAberto.style.width === '0px') {
      BarraMenuAberto.style.width = '180px';
    } else {
      BarraMenuAberto.style.width = '0px';
    }
  }

  function toEn() {
    history.push('/');
  }

  function toPt() {
    history.push('/pt');
  }

  return (
    <body>
      <div className="Section-1-bg" id="home">
        <aside>
          <div className="icon-menu">
            <img src={ menuaberto } alt="um menu aberto" onClick={ abrirmenu } />
          </div>
          {/* --icon-menu--*/}
          <div id="barra-menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#tools">Languages and tools</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>

            <div className="C-icon">
              <a aria-label="go to instagram" className="icon" href="https://www.instagram.com/jean_marcel91/"><AiOutlineInstagram /></a>
              <a aria-label="go to linkd" className="icon" href="https://www.linkedin.com/in/jeanmarv/"><AiOutlineLinkedin /></a>
              <a aria-label="go to github" className="icon" href="https://github.com/jeanmarv"><AiOutlineGithub /></a>
            </div>
            {/* --C-icon--*/}
          </div>
          {/* --barra-menu--*/}
        </aside>
        <div>
          <div className="chang-lang">
            <button type="button" className="usa-icon" onClick={ toEn }>
              <img src={ usaIcon } alt="bandeira do brasil" />
            </button>
            <button type="button" className="pt-icon" onClick={ toPt }>
              <img src={ ptIcon } alt="bandeira dos EUA" />
            </button>
            <h5>
              change language
            </h5>
          </div>
          {/* --Change-language--*/}
        </div>
        <div className="main-title">
          <h1>Hi, I`m Jean Marcel </h1>
          <h2>Fullstack Web Developer</h2>
          <h5>Full stack web developer graduated at Trybe</h5>
          <a href="#about-me">
            <button type="button" className="btn" id="btn-abt-me">About Me</button>
          </a>

          <div className="Numeros">
            <div className="title">
              <a aria-label="go to instagram" className="icon" href="https://www.instagram.com/jean_marcel91/"><AiOutlineInstagram /></a>
            </div>
            {/* --title--*/}

            <div className="title">
              <a aria-label="go to linkd" className="icon" href="https://www.linkedin.com/in/jeanmarv/"><AiOutlineLinkedin /></a>
            </div>
            {/* --title--*/}

            <div className="title">
              <a aria-label="go to github" className="icon" href="https://github.com/jeanmarv"><AiOutlineGithub /></a>
            </div>
            {/* --title--*/}

          </div>
          {/* --Numeros--*/}
        </div>
        {/* --main-title--*/}
      </div>
      <section className="C-sobre" data-aos="fade-up" id="about-me">
        <div className="image">
          <img src={ about } alt="sobre mim" />
        </div>
        {/* --image--*/}

        <div className="Sobre-mim">
          <h1>About Me</h1>
          <h4>Full Stack Web Developer</h4>
          <p>
            {' '}
            Hello, my name is Jean Marcel De Oliveira, A Brazilian with a degree in
            Civil Engineering, i have recently completed my studies in web development at Trybe,
            marking a significant career shift towards the technology field.
            On Trybe programming school I`ve acquired a solid foundation in
            Javascript, CSS, HTML, react, redux, python , databases, tests.
            Additionally, I developed interpersonal skills (soft skills) and the ability to collaborate effectively with other students.
            My innate passion for technology has always been evident in my hobbies, which are closely connected to the field.
            Working in the technology sector is not just a professional choice but also the fulfillment of a lasting personal interest.
            I am enthusiastic about the opportunities that technology presents and eager to apply my knowledge and skills to real and challenging projects in the field.

          </p>
          <a href="#projects">
            <button className="btn" id="btn-my-proj" type="button">My Projects</button>
          </a>

        </div>
        {/* }--Sobre-mim--*/}
      </section>
      {/* }---C-sobre--*/}

      <section className="Container" data-aos="fade-up" id="tools">
        <h1>Known languages and Tools:</h1>
        <p>My most used language and tools sets  </p>
        <div className="C-card" data-aos="fade-up">
          <div className="Card">
            <img src={ java } alt="javascriptLogo" />
            <h3>Javascript</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ python } alt="pythonLogo" />
            <h3>Python</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ typescript } alt="desktop" />
            <h3>Typescript</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ react } alt="desktop" />
            <h3>React</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ redux } alt="desktop" />
            <h3>Redux</h3>
          </div>
          {/* --Card--*/}
        </div>
        {/* --C-card--*/}

        <div className="C-card-2" data-aos="fade-up">

          <div className="Card">
            <img src={ html } alt="desktop" />
            <h3>HTML</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ css } alt="desktop" />
            <h3>CSS</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ mongodb } alt="desktop" />
            <h3>MongoDB</h3>
          </div>
          {/* --Card--*/}

          <div className="Card">
            <img src={ mysql } alt="desktop" />
            <h3>MySQL</h3>
          </div>
          {/* --Card--*/}

        </div>
        {/* --C-card-2--*/}
      </section>
      {/* --conatiner--*/}
      <section className="C-projetos" data-aos="fade-up" id="projects">
        <h1>My Projects</h1>
        <p>My most relevant projects showcase </p>
        <div className="img-projetos" data-aos="fade-up">
          <a href="https://project-recipes-app-mocha.vercel.app/"><img id="project1" src={ projeto1 } alt="projeto" /></a>
          <a href="https://github.com/jeanmarv/trybe_fc"><img id="project2" src={ projeto2 } alt="projeto" /></a>
        </div>
        {/* --img-projetos--*/}
        <div className="img-2">
          <a href="https://github.com/jeanmarv/project_delivery_app"><img id="project3" src={ projeto3 } alt="projeto" /></a>
        </div>
      </section>
      {/* --C-projetos--*/}

      <section className="C-rodapé" id="footer">
        <div>
          <h1>Contact me at:</h1>
          <h1>
            jeanvanzella91@gmail.com
            {' '}
            <ion-icon name="logo-google" />
          </h1>
        </div>
        <div>
          <h1>all my projects at:</h1>
          <h1>https://github.com/jeanmarv?tab=repositories</h1>
        </div>
      </section>
      {/* --C-rodapé--*/}
    </body>
  );
}
