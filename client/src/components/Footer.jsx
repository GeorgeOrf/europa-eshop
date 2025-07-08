import '../styles/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

  return (
    <footer>
      Europa-- We bring the European Wave -- <FontAwesomeIcon icon={faCopyright}/> 
    </footer>
  )
}

export default Footer