import React, { Component } from "react";
import JSONWorks from "../consume/works.json";
import Work from "../templates/work";

// import { Container } from './styles';

export default class WorkSection extends Component {
  render() {
    return (
      <div class="section-dark my-work" id="my-work">
        <div class="container">
          <div
            class="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div class="column is-12">
              <h1 class="title has-text-centered section-title">
                Meus Trabalhos
              </h1>
            </div>
            {JSONWorks.content.map(json => (
              <Work content={json} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
