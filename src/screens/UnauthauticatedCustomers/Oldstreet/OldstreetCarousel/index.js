import React from "react";
import "./style.scss";

import { Carousel } from "react-bootstrap";

class OldstreetCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div className="carouselImage" id="oldstreet1"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImage" id="oldstreet2"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImage" id="oldstreet3"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImage" id="oldstreet4"></div>
        </Carousel.Item>
        <span className="podPrice">£8 per 30min</span>
      </Carousel>
    );
  }
}

export default OldstreetCarousel;
