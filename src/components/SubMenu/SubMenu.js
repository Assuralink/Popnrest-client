import React from "react";
import { connect } from "react-redux";
import "./SubMenu.scss";
import { NavLink } from "react-router-dom";

class SubMenu extends React.Component {
  render() {
    console.log("Sub menu context");
    console.log(this.props);
    return (
      <nav className="sub_menu">
        <NavLink activeClassName="active" to="/customers/bookings-log">
          Booking Log
        </NavLink>
        <NavLink activeClassName="active" to="/customers/account">
          Account settings
          {this.props.firstname === "" && <span class="alert-icon"></span>}
        </NavLink>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstname: state.loginReducer.firstname,
    lastname: state.loginReducer.lastname,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
