import React from "react";
import { connect } from "react-redux";
import "./style.scss";

import { AuthService } from "../../../../../services/login/index";
import { login } from "../../../../../actions/loginActions";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      success: false,
    };
  }

  handleConnect = () => {
    AuthService.login(this.state.email, this.state.password).then((res) => {
      if (res.data.statut) {
        this.props.login(res.data.user, res.data.token);
        this.setState({ error: false, success: true });
        this.props.onModalClose();
      } else {
        this.setState({ error: true, success: false });
      }
    });
  };

  render() {
    return (
      <div className="Form Form_login">
        {this.state.error === true && (
          <div className="bloc errorMessage">
            <i class="bi bi-exclamation-diamond-fill"></i>
            <span class="_content">Wrong email and/or password</span>
          </div>
        )}
        <div className="_form form_email halfSize">
          <input
            type="text"
            placeholder="Email *"
            onChange={(elem) => this.setState({ email: elem.target.value })}
          />
        </div>
        <div className="_form form_password halfSize">
          <input
            type="password"
            placeholder="Password *"
            onChange={(elem) => this.setState({ password: elem.target.value })}
          />
        </div>
        <div className="bloc">
          <button className="action" onClick={() => this.handleConnect()}>
            Connexion
          </button>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
