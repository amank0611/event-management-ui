import React, { Component, SyntheticEvent, useState } from 'react'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import './event.css';
import { Venue } from '../../models/venue';
import { EventType } from '../../models/event';
import DatePicker from 'react-date-picker';

let API_CreateEvent_URL = 'events/CreateEvent';

// const AddEventH = () => {
//    const [startDate, setStartDate] = useState(new Date());
//    return (
//       <DatePicker />
//    );
// }
class AddEvent extends Component {
   eventName = '';
   eventDescription = '';
   venueId = 0;
   eventTypeId = 0;
   startDate = '';
   endDate = '';
   userId = 0;
   createdOn = '';
   eventHost = '';
   organiserId = 0;
   eventStatus = 0;
   isActive = false;
   isDeleted = false;
   responseMessage = '';
   currentUserid = 0;

   state = {
      eventForm: {
         value: '',
         validation: {
            required: true
         }
      },

      redirect: false,
      venues: [],
      eventTypes: [],

      eventNameError: "",
      eventDescriptionError: "",
      eventHostError: ""
   }
   componentDidMount = async () => {
      //debugger

      const resVenue = await axios.get('events/GetVenues');
      this.setState({
         venues: resVenue.data
      });
      if (resVenue.data == '') {
         alert('Something went wrong...!')
      }
      const resEventType = await axios.get('events/GetEventTypes');
      this.setState({
         eventTypes: resEventType.data
      });
      if (resEventType.data == '') {
         alert('Something went wrong...!')
      }

   }
   checkValidity(value: any, rules: any) {
      let isValid = false;
      if (rules.required) {
         isValid = value.trim() !== '';
      }
      return isValid;
   }
   inputChangeHandler() {

   }
   submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      var currentUserId = localStorage.getItem('token');
      const res = await axios.post('events/CreateEvent', {
         eventName: this.eventName,
         eventDescription: this.eventDescription,
         venueId: this.venueId,
         eventTypeId: this.eventTypeId,
         startDate: this.startDate,
         endDate: this.endDate,
         userId: Number(currentUserId),
         createdOn: null,
         eventHost: this.eventHost,
         eventStatus: 0,
         isActive: null,
         isDeleted: null,
         responseMessage: null
      });
      if (res.data._responseData.response) {
         this.setState({
            redirect: true
         });
         alert(res.data._responseData.status);
      }
      else {
         alert(res.data._responseData.status);
      }
   }

   render() {
      if (this.state.redirect) {
         return <Redirect to={'/EventList'} />;
      }
      return (
         <div>
            <section className="page-section" id="services">
               <div className="container text-center">
                  <div className="text-center">
                     <h2 className="section-heading text-uppercase">Add New Event</h2>

                  </div>

                  <div className="form-group">
                     <form className="form" onSubmit={this.submit}>
                        <input type="text" id="txtEventName" className="fadeIn txt-left" name="event" placeholder="Event Name" required autoComplete="on" onChange={e => this.eventName = e.target.value} />
                        <input type="text" id="txtEventDescription" className="fadeIn txt-left" name="venue" placeholder="Description" required autoComplete="on" onChange={e => this.eventDescription = e.target.value} />

                        <div className="form-group ddl">
                           <select name="venueId" className="form-control fadeIn" onChange={e => this.venueId = parseInt(e.target.value)}>
                              <option>Select Venue</option>
                              {this.state.venues.map(
                                 (venues: Venue) => {
                                    return (
                                       <option key={venues.venueId} value={venues.venueId}>{venues.venueName}</option>
                                    )
                                 }
                              )}
                           </select>
                        </div>
                        <div className="form-group ddl">
                           <select name="eventTypeId" className="form-control fadeIn" onChange={e => this.eventTypeId = parseInt(e.target.value)}>
                              <option>Select Event Type</option>
                              {this.state.eventTypes.map(
                                 (eventTypes: EventType) => {
                                    return (
                                       <option key={eventTypes.id} value={eventTypes.id}>{eventTypes.eventType}</option>
                                    )
                                 }
                              )}
                           </select>
                        </div>
                        <input type="text" id="txtStartDate" className="fadeIn txt-left" name="startdate" placeholder="Start Date" required onChange={e => this.startDate = e.target.value} />
                        <input type="text" id="txtEndDate" className="fadeIn txt-left" name="enddate" placeholder="End Date" required onChange={e => this.endDate = e.target.value} />
                        <input type="text" id="txtEventHost" className="fadeIn txt-left" name="eventhost" placeholder="Event Host" required autoComplete="on" onChange={e => this.eventHost = e.target.value} />
                        <input type="submit" className="fadeIn" value="Book Event" />
                     </form>
                  </div>

               </div>
            </section>

         </div>
      );
   }
}
export default AddEvent;