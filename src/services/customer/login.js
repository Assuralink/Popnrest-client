import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};
const burl = "https://popnrest-api.live";

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
