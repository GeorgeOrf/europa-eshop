const CartButton = ({ product, quantity, onReset, text = "Add to cart"}) => {

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const itemIndex = existingCart.findIndex(item => item._id === product._id);

    if (itemIndex !== -1){
      existingCart[itemIndex].quantity +=quantity;
    } else {
      existingCart.push({...product, quantity});
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    if(onReset) onReset();
    
    alert(`${product.name} added to cart!`);
    window.dispatchEvent(new Event("cartUpdated"));
  }

return (
    <button 
    onClick={handleAddToCart}
    className="ml-4 w-[200px] h-[35px] rounded-[15px] text-[16px] font-bold bg-black text-white hover:bg-gray-300 hover:text-black transition-all duration-300 cursor-pointer"
  >
    {text}
  </button>
)

}

export default CartButton