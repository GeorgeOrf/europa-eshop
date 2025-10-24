// General
import { Link } from 'react-router-dom'
// Styles
import '../styles/Navbar.css'
// Assets
import logo from '../assets/placeHolder-logo.png'
import { useEffect, useState } from 'react';


const Header = () => {

  const [hasCartItems, setHasCartItems] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setHasCartItems(cart.length > 0);
    };
  
    checkCart();

    window.addEventListener("cartUpdated", checkCart);
    return () => window.removeEventListener("cartUpdated", checkCart);
  }, []);

  
  return (
    <header>
      <nav className='flex justify-center items-center bg-white w-full h-13'>
        <div className='w-11/12 h-12 rounded-3xl flex items-center bg-black pr-5'>
          <img src={logo} alt="Brand Logo" className='mr-auto h-14'/>
          <ul className='flex gap-6 list-none items-center'>
            <li className="navItem"><Link to="/">Home</Link></li>
            <li className="navItem "><Link to="/contact">Contact</Link></li>
            <li className="navItem"><Link to="/about">About Us</Link></li>
            <li className="navItem"><Link to="/login">Login</Link></li>
            {hasCartItems && (
              <li className='navItem'><Link to="/cart">Cart</Link></li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header