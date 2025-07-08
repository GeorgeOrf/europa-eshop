// Css
import '../styles/Home.css'


// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainShowcase from '../components/MainShowcase'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <MainShowcase />
      <Banner />
    </main>
    <Footer />
    </>
  )
}

export default Home