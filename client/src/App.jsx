// General
import { Routes, Route } from 'react-router-dom';

// Styles
import './App.css'
import './index.css'

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
// States

function App() {
 return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register /> } />
    <Route path='/product/:id' element={<ProductDetails /> } />
    <Route path='cart' element={<Cart />}/>
  </Routes>
 );
}

export default App
