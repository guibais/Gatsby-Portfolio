import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ heroFootFixed, heroFootSize }) => {
  let [navToggle, setNavToggle] = useState(false);
  return (
    <div className="header-wrapper">
      <section
        className="hero is-large"
        style={{
          backgroundImage:
            "url('https://images.wallpaperscraft.com/image/bridge_night_city_river_119393_1920x1080.jpg')"
        }}
      >
        <nav className="navbar is-transparent is-hidden-desktop">
          <div className="navbar-brand">
            <div
              className="navbar-burger burger"
              onClick={() => setNavToggle((navToggle = !navToggle))}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            id="mobile-nav"
            className="navbar-menu"
            style={{ display: navToggle ? "block" : "none" }}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <Link
                  className="navbar-item"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </div>
              <div className="navbar-item">
                <Link
                  className="navbar-item"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Sobre mim
                </Link>
              </div>

              <div className="navbar-item">
                <Link
                  className="navbar-item"
                  to="myWorks"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Meus Trabalhos
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="hero-body"
          id="home"
          style={{
            marginBottom: heroFootFixed ? heroFootSize : "0px"
          }}
        >
          <div className="container has-text-centered">
            <h1 className="subtitle">Olá, sou o</h1>
            <h2 className="title">Guilherme Bais</h2>
            <h1 className="subtitle profession">
              Desenvolvedor Fullstack e Mobile
            </h1>
          </div>
        </div>
        <div
          className="hero-foot"
          id="HeroFoot"
          style={{ position: heroFootFixed ? "fixed" : "initial" }}
        >
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <Link
                      activeClass="is-active"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="is-active"
                      to="aboutMe"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Sobre mim
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="is-active"
                      to="myWorks"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Meus Trabalhos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
