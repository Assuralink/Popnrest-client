import React from "react";
import { connect } from "react-redux";
import "./style.scss";

import OldstreetCarousel from "./OldstreetCarousel/index";
import BookingForm from "./BookingForm/index";

class Oldstreet extends React.Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <section id="Oldstreet">
        <div class="content">
          <OldstreetCarousel />
          <BookingForm />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Oldstreet);
