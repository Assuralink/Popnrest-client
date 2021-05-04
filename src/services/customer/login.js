import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};
const burl = "http://4201251d94b04a58841dc52062c266b0.testmyurl.ws/";

export default {
  login: function (email, password) {
    return axios.post(
      burl + "/customers/login",
      {
        email: email,
        password: password,
      },
      headers
    );
  },
};
