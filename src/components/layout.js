import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";
import { animateScroll as scroll } from "react-scroll";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollable: false, heroFootFixed: false, heroFootSize: 0 };
  }

  componentDidMount() {
    let heroFoot = document.getElementById("HeroFoot").offsetTop;
    this.setState({
      heroFootSize: document.getElementById("HeroFoot").offsetHeight
    });
    window.onscroll = () => {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      this.setState({
        scrollable: top > 300,
        heroFootFixed: top >= heroFoot
      });
    };
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <Helmet />

        <form>
          <button
            onClick={this.scrollToTop}
            id="toTop"
            title="Go to top"
            style={{ display: this.state.scrollable ? "inline-block" : "none" }}
          >
            <i className="fas fa-angle-up"></i>
          </button>
        </form>
        <Header
          heroFootFixed={this.state.heroFootFixed}
          heroFootSize={this.state.heroFootSize}
        />
        <Midsection />
        <Footer />
      </div>
    );
  }
}

export default Layout;
