import React from "react";

import Welcoming from "../../../components/Welcoming/Welcoming";
import SubMenu from "../../../components/SubMenu/SubMenu";
import BookingsList from "./BookingsList/BookingsList";
import "./BookingsLog.scss";

import { BookingService } from "../../../services/bookings/index";

class BookingsLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      past_bookings: [],
      upcoming_bookings: [],
    };
  }

  componentDidMount() {
    BookingService.get_bookings_list(localStorage.getItem("email")).then(
      (res) => {
        this.setState({
          past_bookings: res.data.past_bookings,
          upcoming_bookings: res.data.upcoming_bookings,
        });
      }
    );
  }

  render() {
    console.log("BOOKING LOGS ::");
    return (
      <div className="content">
        <Welcoming />
        <SubMenu />
        <article id="Past_bookings">
          <h1>Upcoming bookings</h1>
          {Number(this.state.upcoming_bookings.length) > 0 ? (
            <div className="bloc _content">
              <div className="_header_bookings_list">
                <span className="date">Date</span>
                <span className="time">Time</span>
                <span className="duration">Duration</span>
                <span className="location">Location</span>
                <span className="price">Price</span>
              </div>
              <BookingsList bookings_list={this.state.upcoming_bookings} />
            </div>
          ) : (
            <span class="bloc noElement">No upcoming bookings</span>
          )}
        </article>
        <article id="Past_bookings">
          <h1>Past bookings</h1>

          <div className="bloc _content">
            <div className="_header_bookings_list">
              <span className="date">Date</span>
              <span className="time">Time</span>
              <span className="duration">Duration</span>
              <span className="location">Location</span>
              <span className="price">Price</span>
            </div>
            {Number(this.state.past_bookings.length) > 0 ? (
              <BookingsList bookings_list={this.state.past_bookings} />
            ) : (
              <span class="bloc noElement">No past bookings</span>
            )}
          </div>
        </article>
      </div>
    );
  }
}

export default BookingsLog;
