const QuantityControl = ({ quantity, onIncrement, onDecrement }) => (
  <div className="flex items-center space-x-3">
    <button 
      onClick={onDecrement} 
      className="w-[50px] tex-[22px] font-bold rounded-lg border border-gray-400 hover:bg-gray-100">
        -
    </button>

    <span 
      className="w-[75px] flex justify-center items-center bg-gray-50 text-black text-lg rounded-md">
      {quantity}
    </span>

    <button 
      onClick={onIncrement} 
      className="w-[50px] tex-[22px] font-bold rounded-lg border border-gray-400 hover:bg-gray-100">
        +
    </button>
  </div>
)

export default QuantityControl