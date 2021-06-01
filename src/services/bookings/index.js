import axios from "axios";
import { url, securedHeaders } from "../index";

export const BookingService = {
  get_bookings_list: function (email) {
    return axios.post(
      url + "/customers/bookings",
      {
        userId: localStorage.getItem("uid"),
        email: email,
      },
      securedHeaders
    );
  },
  addBooking: function (booking) {
    return axios.post(
      url + "/bookings/add",
      {
        userId: localStorage.getItem("uid"),
        date: booking.date,
        time: booking.time,
        duration: booking.duration,
      },
      securedHeaders
    );
  },
};
