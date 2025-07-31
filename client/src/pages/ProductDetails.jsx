// General 
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
// Styles
import '../styles/ProductDetails.css'
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProductDetails = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="outerProdCont">
      <div className="prodCont">
        <img src={`/${product.image}`} alt="Product Image" />
        <div className="prodDetails">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>{product.price}€</span>
          <button className="cartBtn">Add to cart</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductDetails
