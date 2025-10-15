
// Assets
import HeroBG from '../assets/heroBG.svg'

const Hero = () => {
  return (
    <>
    <div className="flex justify-center items-center h-[500px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${HeroBG})` }}>
      <h1 className='text-[10.5rem] text-[#e6e6e6] tracking-wider font-rocker text-shadow fade-in'>EUROPA</h1>
    </div>
    </>
  )
}

export default Hero
