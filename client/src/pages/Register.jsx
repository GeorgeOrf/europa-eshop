// General
import { Link } from 'react-router-dom'
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div>
        <Header />
        <div className="outerCont">
          <div className="formCont">
            <div className="form">
              <h2>Register</h2>
              <label htmlFor="username">Username:</label>
              <input type="text" name='username' placeholder='Your Username'/>
              <label htmlFor="password">Password:</label>
              <input type="password" name='password' placeholder='Your Password'/>
              <label htmlFor="rptPassword">Repeat Password:</label>
              <input type="password" name='rptPassword' placeholder='Your Password'/>
              <div className='btnCont'>
                <button><Link to="/login">Already have an account?</Link></button>
                <button>Lets go!</button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Register
