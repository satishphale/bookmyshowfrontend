import axios from "axios";
import { useEffect, useState } from "react";


const BASE_URL = "http://localhost:8080/api/v1"

const EventsPage = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => { 
    const getEvents = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/events`);
            setEvents(response.data);
        } catch( error) {
            throw new Error(error.message || 'Failed to fetch events');
        }
    };
    getEvents();
    }, [] );


return (
    <div>
      <h1>Events List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h5>{event.id}</h5>
            <h5>{event.name}</h5>
            <h5>{event.venue}</h5>
            <h5>{event.performer}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;

