import React from "react";
import { connect } from "react-redux";
import "./Welcoming.scss";

class Welcoming extends React.Component {
  render() {
    console.log("Welcoming props");
    console.log(this.props);
    return (
      <article className="intro">
        <h3>Welcome back {this.props.firstname} !</h3>
        <p>
          This is your profile page. You will be able to check your
          <br />
          upcoming bookings and past booking. Happy Nap !
        </p>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Map state Welcoming");
  console.log(state);
  return {
    firstname: state.loginReducer.firstname,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcoming);
