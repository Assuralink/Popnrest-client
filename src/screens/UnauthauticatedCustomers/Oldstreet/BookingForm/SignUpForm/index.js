import React from "react";
import { connect } from "react-redux";
import "./style.scss";

import { CustomerService } from "../../../../../services/account-management/index";
import { login } from "../../../../../actions/loginActions";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      password: "",
      birthday: "",
      error: null,
      success: false,
    };
  }

  handleSignUp = () => {
    CustomerService.signup({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      birthday: this.state.birthday,
    }).then((res) => {
      if (res.data.statut) {
        this.props.login(res.data.user, res.data.token);
        this.setState({ error: null, success: true });
        this.props.onModalClose();
      } else {
        this.setState({ error: res.data.error, success: false });
      }
    });
  };

  render() {
    return (
      <div className="Form SignUpForm">
        {this.state.error !== null && (
          <div className="bloc errorMessage">
            <i class="bi bi-exclamation-diamond-fill"></i>
            <span class="_content">{this.state.error}</span>
          </div>
        )}
        {this.state.success === true && (
          <div className="bloc successMessage">
            <i class="bi bi-exclamation-diamond-fill"></i>
            <span class="_content">Your account have been created !</span>
          </div>
        )}
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Firstname"
            onChange={(elem) => this.setState({ firstname: elem.target.value })}
          />
        </div>
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Lastname"
            onChange={(elem) => this.setState({ lastname: elem.target.value })}
          />
        </div>
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Email"
            onChange={(elem) => this.setState({ email: elem.target.value })}
          />
        </div>
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Mobile number"
            onChange={(elem) =>
              this.setState({ phoneNumber: elem.target.value })
            }
          />
        </div>
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Password"
            onChange={(elem) => this.setState({ password: elem.target.value })}
          />
        </div>
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Confirm password"
            onChange={(elem) => this.setState({ password: elem.target.value })}
          />
        </div>
        <div className="_form halfSize">
          <input
            type="text"
            placeholder="Birthday"
            onChange={(elem) => this.setState({ birthday: elem.target.value })}
          />
        </div>
        <div class="bloc">
          <button className="action" onClick={() => this.handleSignUp()}>
            Sign Up
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
