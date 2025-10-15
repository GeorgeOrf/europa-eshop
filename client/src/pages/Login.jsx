// General
import { Link } from 'react-router-dom'
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
      <Header />
        <div className="h-[90vh] bg-black rounded-[35px_35px] text-white flex justify-center items-center m-5">
          <div className="bg-white w-[500px] h-[350px] rounded-2xl shadow-[5px_5px_20px_white]">
            <div className="h-[75%] text-black m-5 flex flex-col items-center">
              <h2 className='self-center font-bold text-2xl p-5'>Login</h2>
              {/* <label htmlFor="username" className='self-start pl-5'>Username:</label> */}
              <input type="text" name='username' placeholder='Username'
                className='w-full max-w-sm border-b-2 m-2 py-3 px-2 text-gray-800 focus:outline-none focus:border-black placeholder-gray-400'
              />

              {/* <label htmlFor="password" className='self-start pl-5' >Password:</label> */}
              <input type="password" name='password' placeholder='Password'
              className='w-full max-w-sm border-b-2 m-2 py-3 px-2 text-gray-800 focus:outline-none focus:border-black placeholder-gray-400'
              />
              {/* <span className='forgotPwd'>Forgot your password?</span> TODO*/}
              <div className='w-[80%] flex justify-between'>
                <button className='m-2 border-2 p-1 rounded-md px-2 hover:border-white hover:text-white hover:bg-black transition-all duration-300 cursor-pointer'><Link to="/register">Don't have an account?</Link></button>
                <button className='m-2 border-2 p-1 rounded-md px-2 hover:border-white hover:text-white hover:bg-black transition-all duration-300 cursor-pointer'>Lets go!</button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Login
