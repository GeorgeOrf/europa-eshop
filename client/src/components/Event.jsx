
const Event = ({id, image, description, title, date, location}) => {

  return (
    <div className='w-[30%] h-[300px] bg-white rounded-[10px] flex flex-col justify-center text-black p-[20px]'>
        <img src={image} alt="Event image" className='w-[70%] h-[55%] rounded-[15px] self-center'/>
        <div className='flex flex-row items-center'><h3>{title}</h3> - <p>{location}</p></div>
        <p id='description' className='tracking-[1px]'>{description}</p>
        <p id='date' className='self-end-safe mb-[20px]'>{date}</p>
        <div className="text-white">{id}</div>
    </div>
  )
}

export default Event;

