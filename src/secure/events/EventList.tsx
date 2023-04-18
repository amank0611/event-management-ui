import React, { Component } from 'react'
import './EventList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Event } from '../../models/event';
import moment from 'moment'

class EventList extends Component {
    state = {
        events: [],
        hasEvent: false,
        totalCount: 0
    }

    userId = 0;

    componentDidMount = async () => {
        ///debugger
        var currentUserId = localStorage.getItem('token');
        const response = await axios.get('events/GetEventsByUser?userId=' + currentUserId);
        // debugger
        // axios.get('events/GetEventsByUser?userId=' + currentUserId)
        //     .then(response => {
        //        alert('success');
        //     })
        //     .catch(error => {
        //         alert('error');
        //     })

        if (response.data._responseData.succeeded) {
            console.log(response.data._responseData);
            if (response.data._responseData.result.length > 0) {
                this.setState({
                    events: response.data._responseData.result,
                    hasEvent: true,
                    totalCount: response.data._responseData.result.length
                });
            }
        }
        else {
            this.setState({
                hasEvent: false
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContentgroup" >
                        <div id="formFooter">
                            <div className="card-title ">
                                <h5>Your Events </h5>
                                {this.state.hasEvent ? '' : <h2>You didnt booked any event. Please add event</h2>}
                                <div><span className="totalEvents"><h5>Total Events: {this.state.totalCount}</h5></span>
                                    <button className="btn btn-secondary nav-link js-scroll-trigger" style={{ marginLeft: 880 }}> <Link to={'/AddEvent'}>Add Event</Link></button></div>
                            </div>
                            <div className="row">
                                {this.state.events.map(
                                    (events: Event) => {
                                        return (
                                            <div className="col-sm-3 col-md-6 col-lg-6 eventCard" key={events.eventId}>
                                                <div className="card text-center">
                                                    <div className="card-header"><b>Event Venue</b> :{events.venueName}</div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{events.eventName}</h5>
                                                        <p className="card-text">{events.eventDescription}</p>
                                                        {events.eventStatus ? (
                                                            <button className="btn btn-success nav-link js-scroll-trigger" style={{ marginLeft: 164 }}><Link to={'/AddEvent'}>Approved...</Link></button>
                                                        ) : (
                                                                <button style={{ marginLeft: 164 }} className="btn btn-danger nav-link js-scroll-trigger" disabled={true}>Pending...</button>
                                                            )}
                                                    </div>
                                                    <div className="card-footer text-muted">
                                                        <span style={{ paddingRight: 30 }}>
                                                            <b>Starts on</b> : {moment(events.startDate).format("MMM Do YYYY")}
                                                        </span>
                                                        <span style={{ paddingLeft: 30 }}>
                                                            <b >Ends on</b> : {moment(events.endDate).format("MMM Do YYYY")}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventList;