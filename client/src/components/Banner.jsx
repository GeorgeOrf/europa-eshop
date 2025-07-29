// Styles
import '../styles/Banner.css'
// Components
import Event from './Event'
// Data
import { mockEvents } from '../data/mockEvents'
// 
import { useEffect, useState } from 'react';
const Banner = () => {

    const [events, setEvents] = useState([]);

      useEffect(() => {
        setEvents(mockEvents);
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


