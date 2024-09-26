
const Hero = () => {
  return (
    <div className="banner">
        <h1>Hxbizz<span>LiftUp</span></h1>
        <p>Elevate Your Fitness Journey.</p>
        <button onClick={() =>{
          window.location.href = '#generate'
        }}>Get Started</button>
    </div>
  )
}

export default Hero