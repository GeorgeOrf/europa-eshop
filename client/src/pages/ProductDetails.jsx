// General 
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from "../components/ProductCard";
import QuantityControl from "../components/QuantityControl";
import CartButton from "../components/CartButton";

const ProductDetails = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if(!res.ok) throw new Error("Product not found!");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Failed to fetch product: ', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <Header />

    <div className="flex justify-center items-center w-full h-[90vh]">
      <ProductCard 
       image={product.image}
       name={product.name}
       description={product.description}
       price={product.price} 
      >
        <QuantityControl 
          quantity={quantity}
          onIncrement={() => setQuantity(q => q + 1)}
          onDecrement={() => setQuantity(q => Math.max(q - 1, 0))}
        />
        <CartButton/>
      </ProductCard>
    </div>

    <Footer />

    </>
  )
}

export default ProductDetails
