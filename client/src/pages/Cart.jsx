// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuantityControl from '../components/QuantityControl'
// General
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    if(updatedCart.length === 0) {
      navigate('/');
    }

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map(item =>
      item._id === id 
      ? { ...item, quantity: Math.max(1, item.quantity + delta)} 
      : item 
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
    navigate('/');
  };



  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <>
      <Header />
        <div className='bg-black h-[90vh] rounded-[35px_35px] m-5 text-white p-5 flex justify-evenly'> {/* Outer container */}
          <h2 className='text-2xl mb-4'>Your Cart</h2>

              <div className='w-[60%]'>
                            {cartItems.length === 0 
                ? ( <p>Your cart is empty!</p> )
                : (
                  <div className=' w-[70%]'>
                    {cartItems.map(item => (
                      <div key={item._id} className='flex items-center justify-between bg-white w-[60%] h-[100px] m-2 rounded-3xl p-4'>
                        <img src={item.image} alt="Product Image" className='h-[100px] w-[90px]'/>
                        <QuantityControl 
                          quantity={item.quantity}
                          onIncrement={() => handleQuantityChange(item._id, +1)}
                          onDecrement={() => handleQuantityChange(item._id, -1)} />
  
                        <p className='text-black text-sm'>{(item.price * item.quantity).toFixed(2)} €</p>
  
                        <button className=' w-5 h-5 cursor-pointer text-red-600 rounded-2xl flex items-center justify-center' 
                          onClick={() => handleRemove(item._id)}>X</button>
                      </div>
                    ))}

                  <div className='mt-6 text-xl'>
                    <p>Total: {total.toFixed(2)}€</p>
                  </div>
                  <div >
                    <button className='mt-6 text-xs cursor-pointer text-red-500 border-2 border-white p-1 rounded-sm'
                      onClick={() => handleClearCart()}
                    >Clear all
                    </button>
                    </div>
                </div>
              
              )}</div>

            <div className='w-[30%] bg-white rounded-2xl'>
              <h2 className='text-black text-2xl font-bold p-2'>Checkout</h2>
            </div>

        </div>
      <Footer />
    </>
  )
};


export default Cart

