import React from "react";
import { connect } from "react-redux";
import "./AccountDetails.scss";
import Welcoming from "../../../components/Welcoming/Welcoming";
import SubMenu from "../../../components/SubMenu/SubMenu";
import OurLocationsMap from "../../../components/OurLocationsMap/OurLocationsMap";
import { CustomerService } from "../../../services/account-management/index";
import Textfield from "./Textfield/Textfield";
import { Alert } from "@material-ui/lab";

import {
  update_firstname,
  update_lastname,
  update_email,
  update_phoneNumber,
} from "../../../actions/loginActions";

class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missingInformations: false,
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem("firstname") === "" ||
      localStorage.getItem("lastname") === "" ||
      localStorage.getItem("phone_number") === "" ||
      localStorage.getItem("email") === ""
    ) {
      this.setState({
        missingInformations: true,
      });
    } else {
      this.setState({
        missingInformations: false,
      });
    }
  }

  updateFirstname = (value) => {
    CustomerService.update_firstname(value).then((res) => {
      this.props.updateFirstname(value);
    });
  };

  updateLastname = (value) => {
    CustomerService.update_lastname(value).then((res) => {
      this.props.updateLastname(value);
    });
  };

  updatePhoneNumber = (value) => {
    CustomerService.update_phone_number(value).then((res) => {
      this.props.updatePhoneNumber(value);
    });
  };

  updateEmail = (value) => {
    console.log(">> Update email :: " + value);
    localStorage.setItem("email", value);
  };

  render() {
    console.log("Account details PROPS");
    console.log(this.props);

    return (
      <div className="content">
        <Welcoming />
        <SubMenu />
        <article id="Account_details">
          <h1>Account details</h1>

          <div className="bloc Form _content Form_account_details">
            {this.state.missingInformations && (
              <Alert severity="error" id="Alert_infos_not_provided">
                Your account informations are not provided
              </Alert>
            )}
            <Textfield
              type="text"
              defaultValue={this.props.firstname}
              toogle_label="Update Firstname"
              update_fn={this.updateFirstname}
            />
            <Textfield
              type="text"
              defaultValue={this.props.lastname}
              toogle_label="Update Lastname"
              update_fn={this.updateLastname}
            />
            <Textfield
              type="text"
              defaultValue={this.props.phoneNumber}
              toogle_label="Update Mobile Number"
              update_fn={this.updatePhoneNumber}
            />
            <Textfield
              type="text"
              defaultValue={this.props.email}
              toogle_label="Update E-mail Adress"
              update_fn={this.updateEmail}
            />
            <Textfield
              type="password"
              defaultValue="•••••••"
              toogle_label="Update Password"
              update_fn={() => console.log(">> Update password")}
            />
          </div>
        </article>
        <OurLocationsMap />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstname: state.loginReducer.firstname,
    lastname: state.loginReducer.lastname,
    email: state.loginReducer.email,
    phoneNumber: state.loginReducer.phoneNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFirstname: (firstname) => {
      dispatch(update_firstname(firstname));
    },
    updateLastname: (lastname) => {
      dispatch(update_lastname(lastname));
    },
    updateEmail: (email) => {
      dispatch(update_email(email));
    },
    updatePhoneNumber: (phoneNumber) => {
      dispatch(update_phoneNumber(phoneNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
