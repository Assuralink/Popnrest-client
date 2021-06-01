import React from "react";
import GoogleMap from "google-map-react";
import "./OurLocationsMap.scss";

import CustomGoogleMap from "../CustomGoogleMap/index";

class OurLocationsMap extends React.Component {
  render() {
    return (
      <div class="bloc Our_locations">
        <h2>Our locations</h2>
        <article class="details">
          Pop & Rest
          <br />
          <br />
          Ground Floor - Unit 1<br />
          10-12 Bache's Street
          <br />
          N1 6DL
          <br />
          London, UK
          <br />
          <br />
          Tel: +44 74 9546 0742
          <br />
          Email: booking@popnrest.com
        </article>
        <CustomGoogleMap />
      </div>
    );
  }
}

export default OurLocationsMap;
