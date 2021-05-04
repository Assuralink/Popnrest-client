import axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};
const burl = "http://4201251d94b04a58841dc52062c266b0.testmyurl.ws/";

export default {
  get_bookings_list: function (email) {
    return axios.post(
      burl + "/customers/bookings",
      {
        userId: localStorage.getItem("uid"),
        email: email,
      },
      headers
    );
  },
};
