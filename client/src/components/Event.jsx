// Styles 
import '../styles/Event.css'

const Event = ({image, description, title, date}) => {

  return (
    <div className='eventContainer'>
        <img src={image} alt="Event image" />
        <h3>{title}</h3>
        <h3>{date}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Event


// Event structure
{/* 
  {
    id: ,
    title: ,
    date: , 
    description: , 
    image: 
  }
  */}
