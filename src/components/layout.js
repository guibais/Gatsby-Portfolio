import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <form action="#home">
      <button id="toTop" title="Go to top">
        <i class="fas fa-angle-up"></i>
      </button>
    </form>
    <Header />
    <Midsection />
    <Footer />
  </div>
);

export default Layout;
