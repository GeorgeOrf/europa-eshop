// Styles 
import '../styles/Event.css'

const Event = ({image, description, title, date, location}) => {

  return (
    <div className='eventContainer'>
        <img src={image} alt="Event image" />
        <div className='titleLocation'><h3>{title}</h3> - <p>{location}</p></div>
        <p id='description'>{description}</p>
        <p id='date'>{date}</p>
    </div>
  )
}

export default Event;

