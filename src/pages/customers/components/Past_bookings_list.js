import React from 'react';

class Past_bookings_list extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="bloc">
            {
                this.props.bookings_list.map((booking) => (
                    <div key={booking.id} className="bloc Booking">
                        <span className="date">{booking.date}</span>
                        <span className="time">{booking.time}</span>
                        <span className="duration">{booking.duration}</span>
                        <span className="location">{booking.location}</span>
                        <span className="price">{booking.price}</span>
                    </div>
                ))
            }
            </div>
        )
    }
}

export default Past_bookings_list;