import axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};
const burl = "https://popnrest-api.live";

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
