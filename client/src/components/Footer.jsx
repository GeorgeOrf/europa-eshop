
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

  return (
    <footer className='flex justify-center items-center bg-(--color-text-secondary) w-full h-10 mt-auto'>
      Europa-- We bring the European Wave -- <FontAwesomeIcon icon={faCopyright}/> 
    </footer>
  )
}

export default Footer