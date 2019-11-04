import React from "react";

import "./style.scss";

import ProfileImg from "../images/profile.jpg";
import WorkSection from "./worksection";

class Midsection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var setBg = bg => {
      return { backgroundImage: `url('${bg}')` };
    };
    return (
      <div>
        <div class="main-content">
          <div class="section-light about-me" id="about-me">
            <div class="container">
              <div class="column is-12 about-me">
                <h1 class="title has-text-centered section-title">Sobre mim</h1>
              </div>
              <div class="columns is-multiline">
                <div
                  class="column is-6 has-vertically-aligned-content"
                  data-aos="fade-right"
                >
                  <p>
                    Sempre tive uma paixão por tecnologia e computadores, antes
                    mesmo de começar minha faculdade, no final do primeiro ano
                    do meu curso de sistemas de informação, comecei minha
                    carreira como desenvolvedor android(java), onde criei um
                    aplicativo para a minha faculdade.
                    <br />
                    Atualmente estou trabalhando com projetos Fullstack que
                    incluem Nodejs, Angular 2,Vuejs, MongoDB. Já fiz projetos
                    usando React, React Native, Ionic, e Flutter. No momento
                    estou desenvolvendo um trabalho de conclusão de curso,
                    utilizando Dotnet Core e Flutter. Utilizo minha experiência
                    com as demais tecnologias, não só para criar sistemas
                    bonitos e bem feitos, mas feitos da maneira a qual trará
                    resultados.
                  </p>
                  <br />
                  <div class="is-divider"></div>
                  <div class="columns about-links">
                    <div class="column">
                      <p class="heading">
                        <strong>Meu Telefone</strong>
                      </p>
                      <p class="subheading">(11) 97762-4811</p>
                    </div>
                    <div class="column">
                      <p class="heading">
                        <strong>Me envie um Email</strong>
                      </p>
                      <p class="subheading">baissousa.guilherme@gmail.com</p>
                    </div>
                    <div class="column">
                      <p class="heading">
                        <strong>Meu Linkedin</strong>
                      </p>
                      <p class="subheading">
                        <a
                          href="https://www.linkedin.com/in/guibais/"
                          target="_blank"
                        >
                          guibais
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="column is-6 right-image has-text-centered"
                  data-aos="fade-left"
                >
                  <img
                    class="is-rounded"
                    src={ProfileImg}
                    style={{ height: "375px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="section-dark resume">
            <div class="container">
              <div
                class="columns is-multiline"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <div class="column is-12 about-me">
                  <h1 class="title has-text-centered section-title">
                    Ver meu currículo
                  </h1>
                </div>
                <div class="column is-10 has-text-centered is-offset-1">
                  <h2 class="subtitle">
                    Para mais informações sobre mim, faça o download do meu
                    currículo.
                  </h2>
                  <form action="example.docs">
                    <button class="button">
                      Download CV&emsp;<i class="fad fa-download fa-lg"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="section-light skills" id="skills">
            <div class="container">
              <div class="columns is-multiline">
                <div class="column is-12 about-me">
                  <h1 class="title has-text-centered section-title">Skills</h1>
                </div>
                <div
                  class="column is-6"
                  data-aos="fade-in"
                  data-aos-easing="linear"
                >
                  <h1>Adobe Experience Design</h1>
                  <progress class="progress" value="70" max="100">
                    30%
                  </progress>
                  <h1>Adobe After Effects</h1>
                  <progress class="progress" value="65" max="100">
                    30%
                  </progress>
                  <h1>Visual Studio Code</h1>
                  <progress class="progress" value="58" max="100">
                    45%
                  </progress>
                  <h1>Sketch</h1>
                  <progress class="progress" value="90" max="100">
                    60%
                  </progress>
                </div>
                <div
                  class="column is-6"
                  data-aos="fade-in"
                  data-aos-easing="linear"
                >
                  <h1>HTML</h1>
                  <progress class="progress" value="85" max="100">
                    30%
                  </progress>
                  <h1>CSS</h1>
                  <progress class="progress" value="95" max="100">
                    30%
                  </progress>
                  <h1>VueJS</h1>
                  <progress class="progress" value="70" max="100">
                    45%
                  </progress>
                  <h1>React</h1>
                  <progress class="progress" value="60" max="100">
                    60%
                  </progress>
                </div>
              </div>
            </div>
          </div>
          <WorkSection />
        </div>
      </div>
    );
  }
}

export default Midsection;
