import axios from "axios";
import { url, securedHeaders, headers } from "../index";

export const CustomerService = {
  signup: function (user) {
    return axios.post(
      url + "/customers/signup",
      {
        firstname: user.firstname,
        lastname: user.lastname,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
      },
      headers
    );
  },
  update_firstname: function (value) {
    return axios.post(
      url + "/customers/firstname",
      {
        userId: localStorage.getItem("uid"),
        firstname: value,
      },
      securedHeaders
    );
  },
  update_lastname: function (value) {
    return axios.post(
      url + "/customers/lastname",
      {
        userId: localStorage.getItem("uid"),
        lastname: value,
      },
      securedHeaders
    );
  },
  update_phone_number: function (value) {
    return axios.post(
      url + "/customers/phone_number",
      {
        userId: localStorage.getItem("uid"),
        phone_number: value,
      },
      securedHeaders
    );
  },
  update_email: function (value) {
    return axios.post(
      url + "/customers/email",
      {
        userId: localStorage.getItem("uid"),
        email: value,
      },
      securedHeaders
    );
  },
};
