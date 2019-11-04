import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Emoji from "./emoji";

const Footer = () => (
  <div class="footer">
    <p>
      <strong class="white">Criado</strong> Por Guilherme Bais Sousa.
    </p>
  </div>
);

export default Footer;
