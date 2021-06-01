import React from "react";
import "./style.scss";

class Head extends React.Component {
  render() {
    return (
      <section id="head">
        <div class="content greyBackground">
          <div class="illustration bloc">
            <article>
              <h1>Hello! Come to recharge in our pod.</h1>
              <h2>Sign up for a 50% discount on your first booking</h2>
              <a href="/oldstreet" class="primary">
                Book now
              </a>
              <a href="#postCovidMeasures" class="secondary">
                Our covid mesures
              </a>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Head;
