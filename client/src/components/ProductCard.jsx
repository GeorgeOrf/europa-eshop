
const ProductCard = ({image, name, description, price, children }) => (
  <div className="bg-white w-[900px] h-[500px] rounded-[50px_200px] flex items-center p-5">
    <img 
      src={`/${image}`} 
      alt={name}
      className="w-[275px] h-[350px] bg-black rounded-[50px_100px] p-2" 
    />
    <div className="w-[70%] h-[200px] mt-12 flex flex-col">
      <h2 className="text-black text-2xl font-bold pl-3">{name}</h2>
      <p className="tracking-[2px] ml-12 mt-1">{description}</p>
      <span className="tracking-[2px] ml-12 mt-1 font-medium">{price}€</span>

      <div className="mt-3 self-center flex items-center space-x-3"> {/* Btn container */}
        {children}
      </div>
    </div>
  </div>
)

export default ProductCard
