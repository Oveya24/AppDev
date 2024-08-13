import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://v1.nocodeapi.com/swarna2024/calendar/movxVljETsRpuhaw';

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL);
      setEvents(response.data);
    } catch (err) {
      console.error('Error fetching events:', err); // Detailed error logging
      setError('Error fetching events. Please check the console for more details.');
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async () => {
    setLoading(true);
    setError('');
    try {
      const newEvent = {
        summary: 'New Event',
        location: '123 Example St.',
        description: 'Description of the new event.',
        start: {
          dateTime: '2024-08-07T09:00:00-07:00',
          timeZone: 'America/Los_Angeles',
        },
        end: {
          dateTime: '2024-08-07T17:00:00-07:00',
          timeZone: 'America/Los_Angeles',
        },
      };

      await axios.post(API_URL, newEvent);
      fetchEvents(); // Refresh events after creation
    } catch (err) {
      console.error('Error creating event:', err); // Detailed error logging
      setError('Error creating event. Please check the console for more details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchEvents}>Fetch Events</button>
      <button onClick={createEvent}>Create Event</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.summary} - {event.start.dateTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarEvents;
