
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
      <div className="bg-black m-[20px] p-[20px] text-white rounded-[35px]">
          <h2 className='mb-[20px]'>Upcoming events</h2>
          <div className="flex justify-center flex-wrap gap-[35px]">
                        {events.map(event => (
            <Event 
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
            location={event.location}
            />
            ))}
          </div>

      </div>
    </>
  )
}

export default Banner


