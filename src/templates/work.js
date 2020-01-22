import React from "react";

const Work = props => (
  <a href={props.content.url} about="_blank" className="column is-3">
    <div className="card work-item">
      <div className="card-image">
        <figure
          className="image is-2by1 "
          style={{
            backgroundImage: "url(" + props.content.image + ")"
          }}
        ></figure>
      </div>

      <div className="content has-text-centered">
        <div>
          <strong>{props.content.title}</strong>
        </div>
        <small>{props.content.languages}</small>
      </div>
    </div>
  </a>
);
export default Work;
