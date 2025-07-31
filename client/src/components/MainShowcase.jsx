// General
import { Link } from 'react-router-dom'
// Styles
import '../styles/MainShowcase.css'
// Components
import Card from './Card'
import { useEffect, useState } from 'react'


const MainShowcase = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  
  return (
      <div className="productCont">
        <h2>Featured Products</h2>
          <div className="cardCont">
            {products.map(product => (
              <Link to={`/product/${product.id}`} className="prodLink" key={product.id}>
              <Card 
              name={product.name}
              price={product.price}
              image={product.image}
              />
              </Link>
            ))}
          </div>
      </div>
  );
}

export default MainShowcase
