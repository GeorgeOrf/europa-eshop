// Styles
import '../styles/Card.css'

const Card = ({name, price, image}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <img src={image} alt="Product image" />
      <h4>{price} €</h4>
    </div>
  )
}

export default Card
