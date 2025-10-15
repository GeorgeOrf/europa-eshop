// General
import { Link } from 'react-router-dom'
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
      <div className="bg-black rounded-[35px] m-[20px]">
        <h2 className='ms-10 mt-2 text-(--color-text-primary)'>Featured Products</h2>
          <div className="flex flex-row justify-evenly items-center w-full h-[500px]">
            {products.map(product => (
              <Link key={product.id} to={`/product/${product._id}`} className="prodLink">
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
