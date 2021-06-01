import React from "react";
import { connect } from "react-redux";
import "./style.scss";

import StripePaymentForm from "./StripePaymentForm/index";

class Cart extends React.Component {
  render() {
    const cart = this.props.cart[0];
    return (
      <section id="Cart">
        <div class="content">
          <article id="CartIntro" class="bloc">
            <h1>Confirm your booking</h1>
            <p>
              You are one step away from confirm your stay. Please be advised
              that you can cancel up to one hour before your booking start time.
            </p>
          </article>
          <article id="CartDetails" class="bloc">
            <h2>About your stay</h2>
            <p>
              <span class="location bloc">
                Nap & Medication Space in {cart.location}
              </span>
              <span class="date">Date : {cart.date}</span>
              <span class="time">Time : {cart.time}</span>
              <span class="duration">Duration : {cart.duration}</span>
              <div class="bloc">
                <span class="price">{cart.price}</span>
              </div>
              <div class="bloc">
                <button class="removeArticle">Remove</button>
              </div>
            </p>
          </article>
          <article id="PromotionalCode">
            <h3>Have a promo code ?</h3>
            <div class="bloc Form PromotionalCodeForm">
              <div class="_form">
                <input type="text" placeholder="Enter your code here" />
              </div>
              <button id="applyPromotionalCode">Apply</button>
            </div>
          </article>
          <article id="PaymentSection">
            <h2>Payment</h2>
            <div class="bloc">
              <StripePaymentForm />
            </div>
          </article>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
