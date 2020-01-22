import React, { useState } from "react";

import "./style.scss";

import ProfileImg from "../images/profile.jpg";
import WorkSection from "./worksection";

const Midsection = () => {
  var setBg = bg => {
    return { backgroundImage: `url('${bg}')` };
  };
  return (
    <div>
      <div className="main-content">
        <div className="section-light about-me" name="aboutMe">
          <div className="container">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                Sobre mim
              </h1>
            </div>
            <div className="columns is-multiline">
              <div
                className="column is-6 has-vertically-aligned-content"
                data-aos="fade-right"
              >
                <p>
                  Sempre tive uma paixão por tecnologia e computadores, antes
                  mesmo de começar minha faculdade, no final do primeiro ano do
                  meu curso de sistemas de informação, comecei minha carreira
                  como desenvolvedor android(java), onde criei um aplicativo
                  para a minha faculdade.
                  <br />
                  Atualmente estou trabalhando com projetos Fullstack que
                  incluem Nodejs, Angular 2,Vuejs, MongoDB. Já fiz projetos
                  usando React, React Native, Ionic, e Flutter. No momento estou
                  desenvolvendo um trabalho de conclusão de curso, utilizando
                  Dotnet Core e Flutter. Utilizo minha experiência com as demais
                  tecnologias, não só para criar sistemas bonitos e bem feitos,
                  mas feitos da maneira a qual trará resultados.
                </p>
                <br />
                <div className="is-divider"></div>
                <div className="columns about-links">
                  <div className="column">
                    <p className="heading">
                      <strong>Meu Telefone</strong>
                    </p>
                    <p className="subheading">(11) 97762-4811</p>
                  </div>
                  <div className="column">
                    <p className="heading">
                      <strong>Me envie um Email</strong>
                    </p>
                    <p className="subheading">baissousa.guilherme@gmail.com</p>
                  </div>
                  <div className="column">
                    <p className="heading">
                      <strong>Meu Linkedin</strong>
                    </p>
                    <p className="subheading">
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
                className="column is-6 right-image has-text-centered"
                data-aos="fade-left"
              >
                <img
                  className="is-rounded"
                  src={ProfileImg}
                  style={{ height: "40vh" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <WorkSection />
        <div className="section-light resume">
          <div className="container">
            <div
              className="columns is-multiline"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <div className="column is-12 about-me">
                <h1 className="title has-text-centered section-title">
                  Ver meu currículo
                </h1>
              </div>
              <div className="column is-10 has-text-centered is-offset-1">
                <h2 className="subtitle">
                  Para mais informações sobre mim, veja o meu currículo.
                </h2>
                <a href="https://docs.google.com/document/d/1L5cTqDj84udHUadSqkwi6QZCConvurnO0Dql8AcnkDQ/edit?usp=sharing">
                  <button className="button">
                    Ver Currículo&emsp;
                    <i className="fad fa-download fa-lg"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midsection;
