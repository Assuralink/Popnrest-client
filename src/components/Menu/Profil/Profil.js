import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import LogOut from "../LogOut/LogOut";

import "./Profil.scss";

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_LogoutModal: false,
    };
  }

  handle_ShowLogoutModal = () => {
    this.setState({
      show_LogoutModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      show_LogoutModal: false,
    });
  };

  handleLogout = (ctx) => {
    console.log(">>>> Handle logout");
    this.setState({
      show_LogoutModal: false,
    });
  };

  render() {
    console.log("Profil PROPS");
    console.log(this.props);
    if (this.props.uid == null) {
      return (
        <div className="Profil">
          <div className="profil_infos">
            <span className="profil_username">Invited</span>
            <Link to="/login">Login</Link>
          </div>
          <div className="profil_icon"></div>
        </div>
      );
    } else {
      return (
        <div className="Profil">
          <div className="profil_infos">
            <span className="profil_username">
              {this.props.firstname === "" && this.props.lastname === ""
                ? "New user"
                : this.props.firstname + " " + this.props.lastname}
            </span>
            <button
              className="logout_button"
              onClick={this.handle_ShowLogoutModal}
            >
              Logout
            </button>
            <LogOut
              show={this.state.show_LogoutModal}
              onHide={this.handleClose}
            />
          </div>
          <div className="profil_icon connected"></div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.loginReducer.uid,
    firstname: state.loginReducer.firstname,
    lastname: state.loginReducer.lastname,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
