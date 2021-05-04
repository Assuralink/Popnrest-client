import React from "react";

import { AuthContext } from "../../../context/auth";

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
    ctx.logout();
    this.setState({
      show_LogoutModal: false,
    });
  };

  render() {
    var user = this.context;
    console.log("PROFIL CTX");
    console.log(this.context);

    if (user.uid == null) {
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
              {user.firstname + " " + user.lastname}
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
              onLogout={() => this.handleLogout(user)}
            />
          </div>
          <div className="profil_icon connected"></div>
        </div>
      );
    }
  }
}

Profil.contextType = AuthContext;

export default Profil;
