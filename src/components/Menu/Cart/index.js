import React from "react";
import { connect } from "react-redux";
import "./style.scss";

import ShoppingCartSvg from "../../../assets/shopping-cart.svg";

class Cart extends React.Component {
  render() {
    return (
      <div class="Cart">
        <img src={ShoppingCartSvg} className="icon" alt="shopping cart icon" />
        <span class="badge">{this.props.cart.length}</span>
      </div>
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
