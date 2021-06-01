import axios from "axios";
import { url, headers } from "../index";

export const AuthService = {
  login: function (email, password) {
    return axios.post(
      url + "/customers/login",
      {
        email: email,
        password: password,
      },
      headers
    );
  },
};
