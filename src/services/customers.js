import axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};
const burl = "https://popnrest-api.live";

export const CustomerService = {
  update_firstname: function (value) {
    return axios.post(
      burl + "/customers/firstname",
      {
        userId: localStorage.getItem("uid"),
        firstname: value,
      },
      headers
    );
  },
  update_lastname: function (value) {
    return axios.post(
      burl + "/customers/lastname",
      {
        userId: localStorage.getItem("uid"),
        lastname: value,
      },
      headers
    );
  },
  update_phone_number: function (value) {
    return axios.post(
      burl + "/customers/phone_number",
      {
        userId: localStorage.getItem("uid"),
        phone_number: value,
      },
      headers
    );
  },
  update_email: function (value) {
    return axios.post(
      burl + "/customers/email",
      {
        userId: localStorage.getItem("uid"),
        email: value,
      },
      headers
    );
  },
};
