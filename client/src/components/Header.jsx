// General
import { Link } from 'react-router-dom'
// Styles
import '../styles/Navbar.css'
// Assets
import logo from '../assets/placeHolder-logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navOuterCont'>
          <img src={logo} alt="Brand Logo" />
          <ul className='navInnerCont'>
            <li className="navItem"><Link to="/">Home</Link></li>
            <li className="navItem"><Link to="/contact">Contact</Link></li>
            <li className="navItem"><Link to="/about">About Us</Link></li>
            <li className="navItem"><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header