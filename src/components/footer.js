import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Emoji from "./emoji";

const Footer = () => (
  <div className="footer">
    <p>
      <strong className="white">Made By</strong> Guilherme Bais Sousa.
    </p>
  </div>
);

export default Footer;
