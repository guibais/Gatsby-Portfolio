import React from "react";

const Work = props => (
  <div class="column is-3">
    <div class="card work-item">
      <div class="card-image">
        <figure
          class="image is-2by1 "
          style={{
            backgroundImage: "url(" + props.content.image + ")"
          }}
        ></figure>
      </div>

      <div class="content has-text-centered">
        <div>
          <strong>{props.content.title}</strong>
        </div>
        <small>{props.content.languages}</small>
      </div>
    </div>
  </div>
);
export default Work;
