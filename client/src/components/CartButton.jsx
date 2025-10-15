const CartButton = ({ text = "Add to cart", onClick }) => (
  <button 
    onClick={onClick}
    className="ml-4 w-[200px] h-[35px] rounded-[15px] text-[16px] font-bold bg-black text-white hover:bg-gray-300 hover:text-black transition-all duration-300"
  >
    {text}
  </button>
)

export default CartButton