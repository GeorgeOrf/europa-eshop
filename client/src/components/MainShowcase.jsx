// Styles
import '../styles/MainShowcase.css'

// Components
import Card from './Card'
// Assets
import Tee from '../assets/placeHolderTee.webp'
import Pants from '../assets/placeHolderPants.webp'

const MainShowcase = () => {

    const cards = [
    {
      id: 1,
      name: "Europa Hoodie",
      price: "25.99$",
      image: Tee
    },
    {
      id: 2,
      name: "Europa T-Shirt",
      price: "25.99$",
      image: Tee
    },
    {
      id: 3,
      name: "Europa Pants",
      price: "25.99$",
      image: Pants
    }
  ];

  return (
      <div className="productCont">
        <h2>Featured Products</h2>
          <div className="cardCont">
            {cards.map(card => (
              <Card 
              key={card.id}
              name={card.name}
              price={card.price}
              image={card.image}
              />
            ))}
          </div>
      </div>
  );
}

export default MainShowcase
