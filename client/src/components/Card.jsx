

const Card = ({name, price, image}) => {
  return (
    <div className='bg-white w-[300px] h-[450px] rounded-[15px] flex flex-col text-center cursor-pointer'>
      <h3 className='mb-auto text-black size-[16px] w-full h-[6%] bg-amber-50 rounded-[15px]'>{name}</h3>
      <img src={image} alt="Product image" className='w-[90%] h-[80%] bg-black self-center rounded-[15px]'/>
      <h4 className=' text-black size-[16px] bg-[rgba(219, 205, 205, 0.473)] w-full mt-auto h-[6%] bg-amber-50 rounded-[15px]'>{price} €</h4>
    </div>
  )
}

export default Card
