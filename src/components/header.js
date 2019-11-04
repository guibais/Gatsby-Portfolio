import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import ProfilePhoto from "../images/profile.jpg";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <div class="header-wrapper" id="home">
    <section
      class="hero is-large"
      style={{
        backgroundImage:
          "url('https://images.wallpaperscraft.com/image/bridge_night_city_river_119393_1920x1080.jpg')"
      }}
    >
      <nav class="navbar is-transparent is-hidden-desktop">
        <div class="navbar-brand">
          <div class="navbar-burger burger" data-target="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="mobile-nav" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <a class="navbar-item" href="#home">
                Home
              </a>
            </div>
            <div class="navbar-item">
              <a class="navbar-item" href="#about-me">
                About Me
              </a>
            </div>
            <div class="navbar-item">
              <a class="navbar-item" href="#services">
                Services
              </a>
            </div>
            <div class="navbar-item">
              <a class="navbar-item" href="#skills">
                Skills
              </a>
            </div>
            <div class="navbar-item">
              <a class="navbar-item" href="#my-work">
                My Work
              </a>
            </div>
            <div class="navbar-item">
              <a class="navbar-item" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="subtitle">Olá, sou o</h1>
          <h2 class="title">Guilherme Bais</h2>
          <h1 class="subtitle profession">Desenvolvedor Fullstack e Mobile</h1>
        </div>
      </div>
      <div class="hero-foot" id="HeroFoot">
        <div class="hero-foot--wrapper">
          <div class="columns">
            <div class="column is-12 hero-menu-desktop has-text-centered">
              <ul>
                <li class="is-active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about-me">Sobre mim</a>
                </li>
                <li>
                  <a href="#services">Serviços</a>
                </li>

                <li>
                  <a href="#my-work">Meus Trabalhos</a>
                </li>
                <li>
                  <a href="#contact">Contate-me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Header;
