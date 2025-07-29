// General
import { Routes, Route } from 'react-router-dom';

// Styles
import './Index.css'
import './App.css'

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'

// States

function App() {
 return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register /> } />
  </Routes>
 );
}

export default App
