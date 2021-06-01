import React from "react";
import "./style.scss";

import CustomGoogleMap from "../../../../components/CustomGoogleMap/index";

class OurNewsletter extends React.Component {
  render() {
    return (
      <section id="ourNewsletter">
        <article class="content greyBackground">
          <h2>Our Newsletter</h2>
          <div class="Form">
            <div class="bloc _form">
              <label>Full name</label>
              <input type="text" />
            </div>
            <div class="bloc _form">
              <label>Your email</label>
              <input type="text" />
            </div>
          </div>
          <CustomGoogleMap />
        </article>
      </section>
    );
  }
}

export default OurNewsletter;
