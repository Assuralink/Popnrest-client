import React from "react";
import "./style.scss";

class OnDemandSpaces extends React.Component {
  render() {
    return (
      <section id="onDemandSpaces">
        <article class="content">
          <h3>On-demand spaces</h3>
          <ul>
            <li>
              <a href="/">
                <div class="illustration" id="getDiscount"></div>
                <h6>Get a discount</h6>
              </a>
            </li>
            <li>
              <a href="/">
                <div class="illustration" id="listYourSpace"></div>
                <h6>List your space</h6>
              </a>
            </li>
            <li>
              <a href="/">
                <div class="illustration" id="companyOffering"></div>
                <h6>Company offering</h6>
              </a>
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default OnDemandSpaces;
