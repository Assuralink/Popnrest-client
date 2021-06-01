import React from "react";
import "./Login.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/loginActions";
import { AuthService } from "../../../services/login/index";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange_email = ({ target: { value } }) => {
    this.setState({
      email: value,
    });
  };
  handleChange_password = ({ target: { value } }) => {
    this.setState({
      password: value,
    });
  };

  handleConnect = () => {
    AuthService.login(this.state.email, this.state.password).then((res) => {
      if (res.data.statut) {
        this.props.login(res.data.user, res.data.token);
      }
    });
  };

  render() {
    if (this.props.uid !== null) {
      return <Route>{this.props.redirect}</Route>;
    } else {
      return (
        <div class="main content">
          <div className="Form Form_login">
            <h3>Please login to access Customer Dashboard</h3>
            <div className="_form form_email error">
              <input
                type="text"
                placeholder="Email *"
                onChange={this.handleChange_email}
              />
            </div>
            <div className="_form form_password">
              <input
                type="password"
                placeholder="Password *"
                onChange={this.handleChange_password}
              />
            </div>
            <div className="bloc">
              <button className="action" onClick={() => this.handleConnect()}>
                Connexion
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.loginReducer.uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, token) => {
      dispatch(login(user, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
