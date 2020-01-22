import React, { Component } from "react";
import JSONWorks from "../consume/works.json";
import Work from "../templates/work";

// import { Container } from './styles';

export default class WorkSection extends Component {
  render() {
    return (
      <div className="section-dark my-work" name="myWorks">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12">
              <h1 className="title has-text-centered section-title">
                Meus Trabalhos
              </h1>
            </div>
            {JSONWorks.content.map(json => (
              <Work content={json} key={json.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
