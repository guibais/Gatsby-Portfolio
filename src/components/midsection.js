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
                About Me
              </h1>
            </div>
            <div className="columns is-multiline">
              <div
                className="column is-6 has-vertically-aligned-content"
                data-aos="fade-right"
              >
                <p>
                  I always had a passion for technology and computers, even
                  before i started college, at the final of the first year of
                  information systems course, i started my carrer as android
                  developer(java), where i made an app for my college.
                  <br />
                  Nowadays i am working with Fullstack projects including
                  Nodejs, Angular 2, Vuejs, MongoDB. I already made projects
                  using React, React Native, Ionic and Flutter. At the moment i
                  am developing a bachelor final project, using Dotnet Core and
                  Flutter. I use my experience with others technologies, not
                  only to create beautiful systems and well done, but in a
                  manner to make results too.
                </p>
                <br />
                <div className="is-divider"></div>
                <div className="columns about-links">
                  <div className="column">
                    <p className="heading">
                      <strong>My Phone Number (Brazil)</strong>
                    </p>
                    <p className="subheading">+55 (11) 97762-4811</p>
                  </div>
                  <div className="column">
                    <p className="heading">
                      <strong>Email Me</strong>
                    </p>
                    <p className="subheading">baissousa.guilherme@gmail.com</p>
                  </div>
                  <div className="column">
                    <p className="heading">
                      <strong>My Linkedin</strong>
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
                <div
                  class="LI-profile-badge"
                  data-version="v1"
                  data-size="medium"
                  data-locale="pt_BR"
                  data-type="vertical"
                  data-theme="light"
                  data-vanity="guibais"
                >
                  <a
                    class="LI-simple-link"
                    href="https://br.linkedin.com/in/guibais?trk=profile-badge"
                  >
                    Gui Bais
                  </a>
                </div>
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
                  See My CV
                </h1>
              </div>
              <div className="column is-10 has-text-centered is-offset-1">
                <h2 className="subtitle">
                  For more information about me, see my CV.
                </h2>
                <div className="columns is-multiline">
                  <div className="column is-12">
                    <a href="https://docs.google.com/document/d/16KKKAVEDKSufoLJNkOpF_8Caup_KWm3mff5AMbmKkZk/edit?usp=sharing">
                      <button className="button">
                        Meu CV - Português&emsp;
                        <i className="fad fa-download fa-lg"></i>
                      </button>
                    </a>
                  </div>
                  <div className="column is-12">
                    <a href="https://docs.google.com/document/d/1L5cTqDj84udHUadSqkwi6QZCConvurnO0Dql8AcnkDQ/edit?usp=sharing">
                      <button className="button">
                        My CV - English&emsp;
                        <i className="fad fa-download fa-lg"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midsection;
