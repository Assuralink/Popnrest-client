import React from "react";

class BookingsList extends React.Component {
  render() {
    return (
      <div className="bloc">
        {this.props.bookings_list.map((booking) => (
          <div key={booking.id} className="bloc Booking">
            <span className="date">{booking.date}</span>
            <span className="time">{booking.time}</span>
            <span className="duration">{booking.duration}</span>
            <span className="location">{booking.location}</span>
            <span className="price">{booking.price}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default BookingsList;
