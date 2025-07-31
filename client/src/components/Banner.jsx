// Styles
import '../styles/Banner.css'
// Components
import Event from './Event'
// 
import { useEffect, useState } from 'react';
const Banner = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
        const res = await fetch('http://localhost:5000/api/events');
        const data = await res.json();
        setEvents(data);
      };

      fetchEvents();
    }, []);

  return (
    <>
      <div className="banner">
          <h2>Upcoming events</h2>
          <div className="eventCont">
                        {events.map(event => (
            <Event 
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
            />
            ))}
          </div>

      </div>
    </>
  )
}

export default Banner


