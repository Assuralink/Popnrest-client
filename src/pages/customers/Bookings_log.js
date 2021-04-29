import React from 'react';

import Welcoming from './components/Welcoming'
import Sub_menu from './components/Sub_menu';
import Bookings_list from './components/Bookings_list';
import './components/Bookings.scss';

import bookingService from '../../services/bookings';

class Bookings_log extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     bookings: [
        //         {
        //             id: 1,
        //             date: "24-11-20",
        //             time: "5PM",
        //             duration: "30 minutes",
        //             location: "Old street",
        //             price: "£9"
        //         },
        //         {
        //             id: 2,
        //             date: "24-11-20",
        //             time: "8PM",
        //             duration: "30 minutes",
        //             location: "London",
        //             price: "£15"
        //         }
        //     ]
        // }
        this.state = {
            past_bookings: [],
            upcoming_bookings: []
        }
    }

    componentDidMount(){
        bookingService.get_bookings_list(
            localStorage.getItem('email')
        ).then((res) => {
            this.setState({
                past_bookings: res.data.past_bookings,
                upcoming_bookings: res.data.upcoming_bookings
            })
        });
    }

    render(){
        return (
            <div className="content">
                <Welcoming />
                <Sub_menu />
                <article id="Past_bookings">
        
                    <h1>Upcoming bookings</h1>

                    {
                        Number(this.state.upcoming_bookings.length) > 0 ? 
                        <div className="bloc _content">
                            <div className="_header_bookings_list">
                                <span className="date">Date</span>
                                <span className="time">Time</span>
                                <span className="duration">Duration</span>
                                <span className="location">Location</span>
                                <span className="price">Price</span>
                            </div>
                            <Bookings_list bookings_list={this.state.upcoming_bookings} /> 
                        </div>
                        : 
                        <span class="bloc noElement">No upcoming bookings</span>
                    }
                    
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
                        {
                            Number(this.state.past_bookings.length) > 0 ? 
                            <Bookings_list bookings_list={this.state.past_bookings} /> : <span class="bloc noElement">No past bookings</span>
                        }
                    </div>
                </article>
            </div>
        )
    }
}



export default Bookings_log;