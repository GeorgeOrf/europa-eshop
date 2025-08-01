// General
import { Link } from 'react-router-dom'
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
// Styles
import '../styles/LoginRegister.css'
const Login = () => {
  return (
    <>
      <Header />
        <div className="outerCont">
          <div className="formCont">
            <div className="form">
              <h2>Login</h2>
              <label htmlFor="username">Username:</label>
              <input type="text" name='username' placeholder='Your Username'/>
              <label htmlFor="password">Password:</label>
              <input type="password" name='password' placeholder='Your Password'/>
              {/* <span className='forgotPwd'>Forgot your password?</span> TODO*/}
              <div className='btnCont'>
                <button><Link to="/register">Don't have an account?</Link></button>
                <button>Lets go!</button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Login
